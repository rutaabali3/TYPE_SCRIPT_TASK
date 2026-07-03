interface InventoryItem {
  itemId: number;
  itemName: string;
  stockQuantity: number;
  unitPrice: number;
}

const inventoryItems: InventoryItem[] = [
  { itemId: 1, itemName: "Laptop", stockQuantity: 8, unitPrice: 150000 },
  { itemId: 2, itemName: "Mouse", stockQuantity: 35, unitPrice: 1200 },
  { itemId: 3, itemName: "Keyboard", stockQuantity: 12, unitPrice: 2500 },
  { itemId: 4, itemName: "Printer", stockQuantity: 5, unitPrice: 32000 },
  { itemId: 5, itemName: "Monitor", stockQuantity: 15, unitPrice: 28000 },
];

const totalInventoryValue = inventoryItems.reduce(
  (total, item) => total + item.stockQuantity * item.unitPrice,
  0
);

console.log("All Inventory Items:");
console.table(inventoryItems);

console.log(`Total Inventory Value: Rs. ${totalInventoryValue}`);

console.log("Items With Stock Less Than 10:");
console.table(inventoryItems.filter((item) => item.stockQuantity < 10));
