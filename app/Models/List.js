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

  get Unchecked() {
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    let checkedBoxes = tasks.filter(t => t.checkbox == false)
    let undefinedBoxes = tasks.filter(t => t.checkbox == undefined)
    return checkedBoxes.length + undefinedBoxes.length
  }

  get Total() {
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    return tasks.length
  }
  
  get Template() {
    let listComplete = false
    if (this.Unchecked == 0){
      listComplete = true
    }

    return `
    <div id="${this.id}" class="col-3 ms-5 listCard rounded">
      <div class="${this.color} shadow-sm rounded-top">
        <div class="text-end">
          <i class="mdi mdi-close text-end mdi-24px p-2 selectable ${listComplete ? '' : 'on-hover'}" onclick="app.listsController.deleteList('${this.id}', '${this.list}')"></i>
        </div>
        <div class="text-center fs-2">
          <span>${this.list}</span>
        </div>
        <div class="text-center pb-2">
          <span>${this.Unchecked}<b>/</b>${this.Total}</span>
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
            <button class="btn btn-outline-secondary text-light bg-info text-nowrap rounded ms-2" name="taskFormButton" type="submit" aria-expanded="false">Add Task</button>
          </div>
        </form>
      </div>
    </div>`
  }
}