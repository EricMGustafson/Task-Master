import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = [
    new List ({
      list: 'Checkpoint 3',
      id: '',
      color: 'red',
    })
  ]

  /** @type {import('./Models/Task').Task[]} */
  tasks = [
    new Task ({
      text: 'Finish Checkpoint 3',
      checkbox: false,
      listId: '',
      id: ''
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
