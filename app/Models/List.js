import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor({color, id, list}) {
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
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    let totCount = tasks.length


    return `
    <div id="${this.id}" class="col-3 ms-5 listCard rounded">
      <div class="${this.color} shadow-sm rounded-top">
        <div class="text-end">
          <i class="mdi mdi-close text-end mdi-24px p-2" onclick="app.listsController.deleteList('${this.id}', '${this.list}')"></i>
        </div>
        <div class="py-2  text-center fs-2">
          <span>${this.list}</span>
        </div>
        <div class="text-center">
          <span id="curCount">0</span>/<span id="totCount">${totCount}</span>
        </div>
      </div>
      <div class="p-2 d-flex flex-column justify-content-between">
        ${this.Tasks}
      </div>
      <div class="p-2">
        <form class="input-group  d-inline-block" onsubmit="app.tasksController.addTask('${this.id}')">
          <div class="input-group">
            <label class="form-check-label visually-hidden" name="task" for="task">Task Name</label>
            <input type="text" id="text" name="text" class="form-control rounded" placeholder="Create new task..." aria-label="Create new task" minlength="3" maxlength="50" required>
            <label class="form-check-label visually-hidden" id="textBtn" name="textBtn" for="taskFormButton">Task Form Button</label>
            <button class="btn btn-outline-secondary bg-success text-nowrap rounded ms-2" name="taskFormButton" type="submit" aria-expanded="false">Add Task</button>
          </div>
        </form>
      </div>
    </div>`
  }
}