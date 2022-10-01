export interface Strategy {
  execute(): void
}

export class Strategy1 implements Strategy {
  public execute(): void {
    console.log("implements strategy 1")
  }
}

export class Strategy2 implements Strategy {
  public execute(): void {
    console.log("implements strategy 2")
  }
}

export class Context {
  private strategy: Strategy

  constructor(strategy: Strategy){
    this.strategy = strategy
  }

  public executeStrategy(): void {
    this.strategy.execute()
  }
}
