import TVMenuDisplay from "@/components/tv-menu-display"

const items = [
  // Wings
  { name: "Chicken Wings", description: "Choice of: Plain · Buffalo · BBQ · Honey Garlic · Garlic Parmesan · Teriyaki", prices: [{ label: "10 pc", amount: 12.99 }, { label: "20 pc", amount: 22.99 }], popular: true },
  { name: "Boneless Wings", description: "Choice of: Plain · Buffalo · BBQ · Honey Garlic · Teriyaki", prices: [{ label: "10 pc", amount: 11.99 }, { label: "20 pc", amount: 20.99 }] },
  { name: "Chicken Tenders", description: "Hand-breaded tenders served with your choice of dipping sauce", prices: [{ label: "5 pc", amount: 9.99 }, { label: "10 pc", amount: 17.99 }], popular: true },
  // Appetizers / Sides
  { name: "Mozzarella Sticks", description: "Golden-fried mozzarella served with marinara", prices: [{ amount: 8.99 }] },
  { name: "Jalapeño Poppers", description: "Cream cheese-stuffed jalapeños, lightly breaded & fried", prices: [{ amount: 8.49 }] },
  { name: "Onion Rings", description: "Thick-cut onion rings with dipping sauce", prices: [{ amount: 6.99 }] },
  { name: "French Fries", prices: [{ label: "Sm", amount: 3.99 }, { label: "Lg", amount: 5.99 }] },
  { name: "Curly Fries", prices: [{ label: "Sm", amount: 4.49 }, { label: "Lg", amount: 6.49 }] },
  { name: "Sweet Potato Fries", prices: [{ label: "Sm", amount: 4.49 }, { label: "Lg", amount: 6.49 }] },
  { name: "Loaded Fries", description: "Topped with cheese sauce, bacon & jalapeños", prices: [{ amount: 8.99 }], popular: true },
  { name: "Garlic Bread", prices: [{ amount: 3.99 }] },
  { name: "Garlic Bread with Cheese", prices: [{ amount: 5.49 }] },
  // Salads
  { name: "Caesar Salad", description: "Romaine, parmesan, croutons & Caesar dressing", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 12.49 }] },
  { name: "Greek Salad", description: "Romaine, feta, olives, tomatoes, cucumbers & red onion", prices: [{ label: "Sm", amount: 8.99 }, { label: "Lg", amount: 12.99 }] },
]

export default function WingsTV() {
  return (
    <TVMenuDisplay
      title="Wings & Sides"
      subtitle="Dipping sauces available · Ranch · Bleu Cheese · Honey Mustard"
      items={items}
    />
  )
}
