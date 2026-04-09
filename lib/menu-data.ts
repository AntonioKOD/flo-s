export type Price = {
  label?: string;
  amount: number;
};

export type MenuItem = {
  name: string;
  description?: string;
  prices: Price[];
  note?: string;
  popular?: boolean;
  category: "Appetizers" | "Platters" | "Brunch";
};

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    name: "Chicken Tenders",
    prices: [
      { label: "Sm", amount: 60 },
      { label: "Lg", amount: 110 },
    ],
    category: "Appetizers",
    popular: true,
  },
  {
    name: "Chicken Wings",
    prices: [
      { label: "Sm", amount: 60 },
      { label: "Lg", amount: 110 },
    ],
    category: "Appetizers",
    popular: true,
  },
  {
    name: "Kebab Chicken Skewers",
    prices: [{ amount: 100 }],
    category: "Appetizers",
  },
  {
    name: "Steak and Cheese Sub Rolls",
    prices: [{ amount: 115 }],
    category: "Appetizers",
  },
  {
    name: "Steak Tip Skewers",
    prices: [{ amount: 150 }],
    category: "Appetizers",
    popular: true,
  },
  {
    name: "Cheeseburger Sliders",
    prices: [{ amount: 125 }],
    category: "Appetizers",
  },
  {
    name: "Roast Beef Sliders",
    description: "Variety of BBQ, cheese, and mayo",
    prices: [{ amount: 150 }],
    category: "Appetizers",
  },
  {
    name: "Tuna Salad Sliders or Wraps",
    prices: [{ amount: 115 }],
    category: "Appetizers",
  },
  {
    name: "Cheese Pizza",
    prices: [{ amount: 16.49 }],
    category: "Appetizers",
  },
  {
    name: "Pizza with One Topping",
    prices: [{ amount: 19.49 }],
    category: "Appetizers",
  },
  {
    name: "Pizza with Two Toppings",
    prices: [{ amount: 22.49 }],
    category: "Appetizers",
  },
  {
    name: "Flo's Special Pizza",
    prices: [{ amount: 24.99 }],
    category: "Appetizers",
    popular: true,
  },
  {
    name: "Special Pizzas",
    description:
      "Veggie, Margherita, Chicken Bacon Ranch, Hawaiian, Chicken Broccoli, BBQ Chicken, Buffalo Chicken, Greek, MeatLovers",
    prices: [{ amount: 23.99 }],
    category: "Appetizers",
  },
  // Platters
  {
    name: "Fruit Platter",
    prices: [{ amount: 115 }],
    category: "Platters",
  },
  {
    name: "Hummus Platter",
    prices: [{ amount: 110 }],
    category: "Platters",
  },
  {
    name: "Cheese and Fruit",
    prices: [{ amount: 140 }],
    category: "Platters",
  },
  {
    name: "Charcuterie and Artisan Cheeses",
    prices: [{ amount: 180 }],
    category: "Platters",
    popular: true,
  },
  {
    name: "Choice of Salad \u2013 Caesar",
    prices: [{ amount: 85 }],
    category: "Platters",
  },
  {
    name: "Choice of Salad \u2013 Greek, House",
    prices: [{ amount: 90 }],
    category: "Platters",
  },
  {
    name: "Chicken Broccoli Ziti",
    description: "Homemade Alfredo Sauce",
    prices: [{ amount: 140 }],
    category: "Platters",
    popular: true,
  },
  {
    name: "Fried Haddock",
    prices: [{ amount: 240 }],
    category: "Platters",
  },
  {
    name: "Fried Shrimp",
    description: "40/50 pieces per platter",
    prices: [{ amount: 120 }],
    category: "Platters",
  },
  {
    name: "Garlic Mashed Potatoes",
    prices: [{ amount: 120 }],
    category: "Platters",
  },
  {
    name: "Chicken Parmigiana Ziti",
    prices: [{ amount: 140 }],
    category: "Platters",
  },
  {
    name: "Spaghetti and Meatballs",
    prices: [{ amount: 140 }],
    category: "Platters",
    popular: true,
  },
  {
    name: "Steak Tips",
    prices: [{ amount: 320 }],
    category: "Platters",
  },
  {
    name: "Grilled Chicken",
    prices: [{ amount: 200 }],
    category: "Platters",
  },
  // Brunch
  {
    name: "Breakfast Potatoes with Peppers & Onions",
    prices: [{ amount: 100 }],
    category: "Brunch",
  },
  {
    name: "Scramble Eggs",
    prices: [{ amount: 150 }],
    category: "Brunch",
  },
  {
    name: "Veggie Omelette",
    prices: [{ label: "Dozen", amount: 95 }],
    category: "Brunch",
  },
  {
    name: "Omelette",
    description: "Choice of Bacon, Ham, Sausage",
    prices: [{ label: "Dozen", amount: 105 }],
    category: "Brunch",
    popular: true,
  },
  {
    name: "Bacon",
    prices: [
      { label: "Sm", amount: 75 },
      { label: "Lg", amount: 140 },
    ],
    category: "Brunch",
  },
  {
    name: "Sausages",
    prices: [
      { label: "Sm", amount: 75 },
      { label: "Lg", amount: 140 },
    ],
    category: "Brunch",
  },
  {
    name: "Pancakes",
    description: "With fresh berries, butter, maple syrup",
    prices: [{ amount: 100 }],
    category: "Brunch",
    popular: true,
  },
  {
    name: "Brioche French Toast",
    description: "With fresh berries, butter, maple syrup",
    prices: [{ amount: 110 }],
    category: "Brunch",
  },
  {
    name: "Toast",
    description: "White, Wheat, English Muffin, Biscuit, Bagel, Croissant",
    prices: [{ amount: 50 }],
    category: "Brunch",
  },
  {
    name: "Sausage, Egg & Cheese or Bacon, Egg & Cheese",
    description: "With a choice of Croissant, English Muffin or Bagel",
    prices: [{ label: "Dozen", amount: 88 }],
    category: "Brunch",
    popular: true,
  },
];

export const FEATURED_ITEMS: MenuItem[] = MENU_ITEMS.filter((item) => item.popular).slice(0, 6);

export const CATERING_SECTIONS = [
  {
    title: "Appetizers",
    subtitle: "",
    items: MENU_ITEMS.filter((i) => i.category === "Appetizers"),
  },
  {
    title: "Platters and Trays",
    subtitle: "Feeds 20\u201325 people",
    items: MENU_ITEMS.filter((i) => i.category === "Platters"),
  },
  {
    title: "Brunch Catering Menu",
    subtitle: "",
    items: MENU_ITEMS.filter((i) => i.category === "Brunch"),
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
