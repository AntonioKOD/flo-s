import TVMenuDisplay from "@/components/tv-menu-display"

const items = [
  { name: "Breakfast Potatoes with Peppers & Onions", prices: [{ amount: 100 }] },
  { name: "Scrambled Eggs", prices: [{ amount: 150 }] },
  { name: "Veggie Omelette", prices: [{ label: "Dozen", amount: 95 }] },
  { name: "Omelette", description: "Choice of Bacon, Ham, Sausage", prices: [{ label: "Dozen", amount: 105 }], popular: true },
  { name: "Bacon", prices: [{ label: "Sm", amount: 75 }, { label: "Lg", amount: 140 }] },
  { name: "Sausages", prices: [{ label: "Sm", amount: 75 }, { label: "Lg", amount: 140 }] },
  { name: "Pancakes", description: "With fresh berries, butter, maple syrup", prices: [{ amount: 100 }], popular: true },
  { name: "Brioche French Toast", description: "With fresh berries, butter, maple syrup", prices: [{ amount: 110 }] },
  { name: "Toast", description: "White \u00B7 Wheat \u00B7 English Muffin \u00B7 Biscuit \u00B7 Bagel \u00B7 Croissant", prices: [{ amount: 50 }] },
  {
    name: "Sandwich \u2014 Sausage, Egg & Cheese or Bacon, Egg & Cheese",
    description: "Choice of Croissant, English Muffin or Bagel",
    prices: [{ label: "Dozen", amount: 88 }],
    popular: true,
  },
]

export default function BrunchTV() {
  return <TVMenuDisplay title="Brunch Catering" items={items} />
}
