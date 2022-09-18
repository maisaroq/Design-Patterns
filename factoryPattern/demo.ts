import { Product, productFactory } from "./factory-method"

export function display() : void {
  const aProduct: Product = productFactory.createProduct("A")
  const bProduct: Product = productFactory.createProduct("B")

  console.log(aProduct.method())
  console.log(bProduct.method())
}

display();
