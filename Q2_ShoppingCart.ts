interface Product {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

const products: Product[] = [
  { productId: 101, productName: "Keyboard", price: 2500, quantity: 2 },
  { productId: 102, productName: "Mouse", price: 1200, quantity: 3 },
  { productId: 103, productName: "Monitor", price: 28000, quantity: 1 },
  { productId: 104, productName: "USB Cable", price: 500, quantity: 4 },
  { productId: 105, productName: "Headphones", price: 4500, quantity: 2 },
];

const productsWithTotal = products.map((product) => ({
  ...product,
  totalPrice: product.price * product.quantity,
}));

const grandTotal = productsWithTotal.reduce(
  (total, product) => total + product.totalPrice,
  0
);

console.log("Shopping Cart Details:");
console.table(productsWithTotal);
console.log(`Grand Total Bill: Rs. ${grandTotal}`);
