import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor({color, id, list}) {
    if (!list) {
      window.Error('You must enter a list name')
    }

    this.color = color || ''
    this.id = id || generateId()
    this.list = list
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    let taskTemplate = ''
    tasks.forEach(t => taskTemplate += t.Template)
    return taskTemplate

  }

  get Template() {
    return `
    <div id="${this.id}" class="col-3 ${this.color} ms-5 mt-3">
      <div class="m-5 d-flex text-center">
        <h2>${this.list}</h2>
        <i class="mdi mdi-close text-end"onclick="app.listsController.deleteList('${this.id}')"></i>
      </div>
      <div>${this.Tasks}</div>
      <form class="input-group mb-3" onsubmit="app.tasksController.addTask('${this.id}')">
        <input type="text" name="text" id="text" class="form-control" placeholder="Create new task..." aria-label="Create new task" aria-describedby="basic-addon2" minlength="3" maxlength="50" required>
        <div class="input-group-append">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>`
  }
}