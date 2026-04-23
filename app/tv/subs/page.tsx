import TVMenuDisplay from "@/components/tv-menu-display"

const items = [
  // Hot Subs
  { name: "Steak & Cheese Sub", description: "Shaved steak, peppers, onions, mushrooms & cheese", prices: [{ label: "Sm", amount: 8.99 }, { label: "Lg", amount: 12.99 }], popular: true },
  { name: "Chicken Parmigiana Sub", description: "Breaded chicken cutlet, marinara & melted mozzarella", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 11.99 }] },
  { name: "Meatball Parmigiana Sub", description: "Homemade meatballs, marinara & melted mozzarella", prices: [{ label: "Sm", amount: 7.99 }, { label: "Lg", amount: 11.49 }] },
  { name: "Sausage & Pepper Sub", description: "Italian sausage, roasted peppers & onions", prices: [{ label: "Sm", amount: 7.99 }, { label: "Lg", amount: 11.49 }] },
  { name: "Grilled Chicken Sub", description: "Grilled chicken, lettuce, tomato & mayo", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 11.99 }] },
  { name: "Buffalo Chicken Sub", description: "Buffalo chicken, bleu cheese & lettuce", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 11.99 }], popular: true },
  { name: "BBQ Chicken Sub", description: "BBQ grilled chicken, bacon & cheddar", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 11.99 }] },
  { name: "Eggplant Parmigiana Sub", description: "Breaded eggplant, marinara & mozzarella", prices: [{ label: "Sm", amount: 7.49 }, { label: "Lg", amount: 10.99 }] },
  // Cold Subs
  { name: "Italian Cold Sub", description: "Ham, salami, pepperoni, provolone, lettuce & tomato", prices: [{ label: "Sm", amount: 7.99 }, { label: "Lg", amount: 11.49 }] },
  { name: "Roast Beef Sub", description: "Fresh roast beef, lettuce, tomato & mayo", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 12.49 }], popular: true },
  { name: "Turkey Club Sub", description: "Turkey, bacon, lettuce, tomato & mayo", prices: [{ label: "Sm", amount: 8.49 }, { label: "Lg", amount: 11.99 }] },
  { name: "Tuna Salad Sub", description: "Fresh tuna salad, lettuce & tomato", prices: [{ label: "Sm", amount: 7.99 }, { label: "Lg", amount: 11.49 }] },
  { name: "Ham & Cheese Sub", description: "Black forest ham, American cheese, lettuce & tomato", prices: [{ label: "Sm", amount: 7.49 }, { label: "Lg", amount: 10.99 }] },
  { name: "BLT Sub", description: "Bacon, lettuce, tomato & mayo", prices: [{ label: "Sm", amount: 7.49 }, { label: "Lg", amount: 10.99 }] },
]

export default function SubsTV() {
  return (
    <TVMenuDisplay
      title="Subs & Sandwiches"
      subtitle="Served on fresh-baked bread · Small 6&quot; · Large 12&quot;"
      items={items}
    />
  )
}
