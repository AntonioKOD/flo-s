import TVMenuDisplay from "@/components/tv-menu-display"

const items = [
  { name: "Chicken Tenders", prices: [{ label: "Sm", amount: 60 }, { label: "Lg", amount: 110 }], popular: true },
  { name: "Chicken Wings", prices: [{ label: "Sm", amount: 60 }, { label: "Lg", amount: 110 }], popular: true },
  { name: "Kebab Chicken Skewers", prices: [{ amount: 100 }] },
  { name: "Steak and Cheese Sub Rolls", prices: [{ amount: 115 }] },
  { name: "Steak Tip Skewers", prices: [{ amount: 150 }], popular: true },
  { name: "Cheeseburger Sliders", prices: [{ amount: 125 }] },
  { name: "Roast Beef Sliders", description: "Variety of BBQ, cheese, and mayo", prices: [{ amount: 150 }] },
  { name: "Tuna Salad Sliders or Wraps", prices: [{ amount: 115 }] },
  { name: "Cheese Pizza", prices: [{ amount: 16.49 }] },
  { name: "Pizza with One Topping", prices: [{ amount: 19.49 }] },
  { name: "Pizza with Two Toppings", prices: [{ amount: 22.49 }] },
  { name: "Flo's Special Pizza", prices: [{ amount: 24.99 }], popular: true },
  {
    name: "Special Pizzas",
    description: "Veggie \u00B7 Margherita \u00B7 Chicken Bacon Ranch \u00B7 Hawaiian \u00B7 Chicken Broccoli \u00B7 BBQ Chicken \u00B7 Buffalo Chicken \u00B7 Greek \u00B7 MeatLovers",
    prices: [{ amount: 23.99 }],
  },
]

export default function AppetizersTV() {
  return <TVMenuDisplay title="Appetizers" items={items} />
}
