import{ConcreteSubject, ConcreteObserver} from "./observer"

function show(): void {
  let Project: ConcreteSubject = new ConcreteSubject()

  Project.register(new ConcreteObserver("user1"))
  Project.register(new ConcreteObserver("user2"))
  Project.unregister(new ConcreteObserver("user2"))

  Project.subjectState = 100
  Project.notify
}

show()
