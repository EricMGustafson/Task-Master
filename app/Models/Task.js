import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({id, text, checkbox, listId}) {
    this.checkbox = checkbox
    this.id = id || generateId()
    this.listId = listId
    this.text = text
  }
  
  get Template() {
    return `
    <div class="d-flex justify-content-between fs-4">
      <div class="d-flex">
        <div class="mb-2 d-flex">
          <input class="form-check-input align-text-top selectable" ${this.checkbox ? 'checked' : ''}  type="checkbox"  onclick="app.tasksController.checkboxValue('${this.id}', '${this.text}')">
        </div>
        <div>
          <label id="${this.id}" class="form-check-label ms-2 align-top text-wrap ${this.checkbox ? 'text-decoration-line-through' : ''} " name="checkbox-label" id="checkbox-label" for="taskItem">${this.text}</label>
        </div>
      </div>
      <div>
        <i class="mdi mdi-close align-middle selectable ${this.checkbox ? '' : 'on-hover'}" onclick="app.tasksController.deleteTask('${this.id}')"></i>
      </div>
    </div>`
  }
}