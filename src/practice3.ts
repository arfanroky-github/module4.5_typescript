interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: IProduct[] = [
  { id: 1, name: 'Product 1', price: 10, category: 'Category A' },
  { id: 2, name: 'Product 2', price: 20, category: 'Category B' },
  { id: 3, name: 'Product 3', price: 30, category: 'Category C' },
  { id: 4, name: 'Product 4', price: 40, category: 'Category D' },
];

function filterProducts<T extends keyof IProduct>(
  products: IProduct[],
  criterion: T,
  value: IProduct[T]
): IProduct[] {
  return products.filter((product) => product[criterion] === value);
}

const filteredProducts = filterProducts(products, 'price', 30);
console.log(filteredProducts);

