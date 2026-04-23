import TVMenuDisplay from "@/components/tv-menu-display"

const items = [
  { name: "Cheese Pizza", prices: [{ amount: 16.49 }], popular: false },
  { name: "Pizza with One Topping", prices: [{ amount: 19.49 }] },
  { name: "Pizza with Two Toppings", prices: [{ amount: 22.49 }] },
  { name: "Flo's Special Pizza", description: "Our signature house special with premium toppings", prices: [{ amount: 24.99 }], popular: true },
  { name: "Pizza Margherita", description: "Homemade tomato sauce, fresh mozzarella, sliced tomatoes, fresh garlic & basil", prices: [{ amount: 23.99 }] },
  { name: "Buffalo Chicken Pizza", description: "Hot sauce, buffalo grilled chicken & cheese", prices: [{ amount: 23.99 }] },
  { name: "Greek Pizza", description: "Fresh spinach, red onions, black olives, sliced tomatoes, feta & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Chicken Bacon Ranch Pizza", description: "Ranch base, grilled chicken, bacon & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Chicken Broccoli Pizza", description: "Alfredo sauce, grilled chicken & broccoli", prices: [{ amount: 23.99 }] },
  { name: "BBQ Chicken Pizza", description: "BBQ sauce, grilled chicken & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Meat Lovers Pizza", description: "Pepperoni, sausage, ham, bacon & mozzarella", prices: [{ amount: 23.99 }], popular: true },
  { name: "Veggie Pizza", description: "Bell peppers, mushrooms, onions, olives & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Hawaiian Pizza", description: "Ham, pineapple & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Philly Cheese Steak Pizza", description: "Steak, peppers, onions & cheese sauce", prices: [{ amount: 23.99 }] },
  { name: "Shrimp Scampi Pizza", description: "Garlic butter, shrimp, fresh herbs & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Florentine Pizza", description: "Spinach, ricotta, garlic & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "White Pizza", description: "Garlic olive oil, ricotta, mozzarella & herbs", prices: [{ amount: 23.99 }] },
  { name: "Eggplant Pizza", description: "Grilled eggplant, roasted garlic & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Ricotta Pizza", description: "Fresh ricotta, garlic, olive oil & mozzarella", prices: [{ amount: 23.99 }] },
  { name: "Pizza Slice", description: "Ask your server for today's available slices", prices: [{ label: "Slice", amount: 3.99 }] },
]

export default function PizzaTV() {
  return (
    <TVMenuDisplay
      title="Pizza Menu"
      subtitle="All pizzas made fresh to order · 16&quot; large"
      items={items}
    />
  )
}
