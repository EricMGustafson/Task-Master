import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor({color, id, list}) {
    if (list == '') {
      window.Error('You must enter a list name')
    }

    this.color = color || ''
    this.id = generateId()
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
    <div id="${this.id}" class="col-3 bg-warning ms-5 mt-3">
      <div class="m-5 d-flex text-center">
        <h2>${this.list}</h2>
        <i class="mdi mdi-close text-end"onclick="app.listsController.deleteList('${this.id}')"></i>
      </div>
      <div id="tasks">${this.Tasks}</div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Create new task..." aria-label="Create new task" aria-describedby="basic-addon2">
        <div class="input-group-append">
          <button onsubmit="app.tasksController.addTask()">Add</button>
        </div>
      </div>
    </div>`
  }
}