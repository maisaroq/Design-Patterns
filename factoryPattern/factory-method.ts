export interface Product {
  method() : void
}

export class buildproductA implements Product {
  method  () {
    return "Method of building Product A"
  }
}

export class buildproductB implements Product {
  method () {
    return "method of building product B"
  }
}

export class defaultProduct implements Product {
  method ()  {
    return "default Product"
  }
}

export class productFactory {
  static createProduct(type: string) : Product {
    if (type === "A") {
      return new buildproductA
    } else if (type === "B") {
      return new buildproductB
    }
    return new defaultProduct
  }
}
