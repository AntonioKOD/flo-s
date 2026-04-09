import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

const COOKIE_NAME = "flos_subscribed"
const rateLimitSet = new Set<string>()

function generatePromoCode(email: string): string {
  const secret = process.env.PROMO_SECRET || "flos-pizza-default-secret"
  const hash = crypto.createHmac("sha256", secret).update(email.toLowerCase().trim()).digest("hex")
  return `FLOS-${hash.slice(0, 8).toUpperCase()}`
}

export async function POST(req: NextRequest) {
  // Check if already subscribed via cookie
  if (req.cookies.get(COOKIE_NAME)) {
    return NextResponse.json({ error: "Already subscribed" }, { status: 400 })
  }

  // Rate limiting by IP
  const ip = req.headers.get("x-forwarded-for") || "unknown"
  if (rateLimitSet.has(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
  }

  try {
    const { email } = await req.json()
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 })
    }

    const promoCode = generatePromoCode(email)

    // Add to rate limit temporarily
    rateLimitSet.add(ip)
    setTimeout(() => rateLimitSet.delete(ip), 60_000)

    // If Resend API key is configured, send the email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Add to audience if configured
      if (process.env.RESEND_AUDIENCE_ID) {
        await resend.contacts.create({
          email: email.toLowerCase().trim(),
          audienceId: process.env.RESEND_AUDIENCE_ID,
        }).catch(() => {}) // Silently ignore if already exists
      }

      // Send promo email
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Flo's Pizza <noreply@flospizza.com>",
        to: email.toLowerCase().trim(),
        subject: "Your 10% OFF Code from Flo's Pizza!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
            <div style="background: #C1272D; padding: 32px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Flo's Pizza</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Brockton, MA</p>
            </div>
            <div style="padding: 32px; background: white;">
              <p style="color: #454545; font-size: 16px; line-height: 1.6;">
                Welcome to the Flo's Pizza family! Here's your exclusive discount code:
              </p>
              <div style="background: #FFF5E1; border: 2px dashed #C1272D; border-radius: 12px; padding: 20px; text-align: center; margin: 24px 0;">
                <p style="color: #C1272D; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: 3px;">
                  ${promoCode}
                </p>
                <p style="color: #6A5B4A; font-size: 14px; margin: 8px 0 0;">10% OFF your next order</p>
              </div>
              <a href="https://flospizza.kwickmenu.com" style="display: block; background: #C1272D; color: white; text-align: center; padding: 16px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px;">
                Order Now
              </a>
              <p style="color: #999; font-size: 12px; text-align: center; margin-top: 24px;">
                750 Centre Street, Brockton, MA 02302 | (774) 480-5155
              </p>
            </div>
          </div>
        `,
      })
    }

    // Set cookie
    const response = NextResponse.json({ success: true, promoCode })
    response.cookies.set(COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 365 * 24 * 60 * 60,
      path: "/",
    })

    return response
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
