import {Context, Strategy1, Strategy2} from "./strategy"

function show(): void {
  
  let context: Context = new Context(new Strategy1())

  context.executeStrategy()

  context = new Context(new Strategy2())

  context.executeStrategy()
}
show()
