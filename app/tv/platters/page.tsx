import TVMenuDisplay from "@/components/tv-menu-display"

const items = [
  { name: "Fruit Platter", prices: [{ amount: 115 }] },
  { name: "Hummus Platter", prices: [{ amount: 110 }] },
  { name: "Cheese and Fruit", prices: [{ amount: 140 }] },
  { name: "Charcuterie & Artisan Cheeses", prices: [{ amount: 180 }], popular: true },
  { name: "Caesar Salad", prices: [{ amount: 85 }] },
  { name: "Greek or House Salad", prices: [{ amount: 90 }] },
  { name: "Chicken Broccoli Ziti", description: "Homemade Alfredo Sauce", prices: [{ amount: 140 }], popular: true },
  { name: "Fried Haddock", prices: [{ amount: 240 }] },
  { name: "Fried Shrimp", description: "40/50 pieces per platter", prices: [{ amount: 120 }] },
  { name: "Garlic Mashed Potatoes", prices: [{ amount: 120 }] },
  { name: "Chicken Parmigiana Ziti", prices: [{ amount: 140 }] },
  { name: "Spaghetti and Meatballs", prices: [{ amount: 140 }], popular: true },
  { name: "Steak Tips", prices: [{ amount: 320 }] },
  { name: "Grilled Chicken", prices: [{ amount: 200 }] },
]

export default function PlattersTV() {
  return <TVMenuDisplay title="Platters & Trays" subtitle="Feeds 20\u201325 people" items={items} />
}
