type ProductTuple<T extends string, U extends number, V extends number> = [
  T,
  U,
  V
];

function calculateTotalCost<T extends ProductTuple<string, number, number>>(
  products: T[]
): number {
  return products.reduce(
    (total, [name, price, quantity]) => total + price * quantity,
    0
  );
}

const productList: ProductTuple<string, number, number>[] = [
  ["product 1", 10, 1],
  ["product 2", 10, 2],
  ["product 3", 10, 3],
];

const totalCost = calculateTotalCost(productList);
console.log(totalCost);
