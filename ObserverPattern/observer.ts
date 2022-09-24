export class Subject {
  private observers: Observer[] = []

  public register(observer: Observer): void {
    console.log(observer, "is pushed")
    this.observers.push(observer)
  }

  public unregister(observerToRemove: Observer): void {
    this.observers = this.observers.filter(observer => {
      if(observer != observerToRemove)
      return observer
    })
    console.log(observerToRemove, "is removed")
  }

  public notify(): void {
    console.log("notify all observers", this.observers)
    this.observers.forEach(observer => {
      observer.notify()
    })
  }
}

export class ConcreteSubject extends Subject {
  public subjectState: number = 0

  get SubjectState(): number {
    return this.subjectState
  }

  set SubjectState(subjectState: number) {
     this.subjectState = subjectState
     this.notify()
  }
}

export class Observer {
  public notify(): void {
    throw new Error("throw error")
  }
}

export class ConcreteObserver extends Observer {
  private name: string

  constructor (name: string){
    super()
    console.log("ConcreteObserver", name , "Is created")
    this.name = name

  }

  public notify(): void {
    console.log(this.name, "had been notified")
  }

}
