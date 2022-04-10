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
    <div class="d-flex justify-content-between fs-4" id="${this.id}">
      <div class="d-flex">
        <div class="mb-2 d-flex">
          <input class="form-check-input align-text-top" id="${this.id}" ${this.checkbox ? 'checked' : ''}  type="checkbox"  onclick="app.tasksController.checkboxValue('${this.id}')">
        </div>
        <div>
          <label class="form-check-label ms-2 align-top text-wrap" name="checkbox-label" id="checkbox-label" for="taskItem">${this.text}</label>
        </div>
      </div>
      <div>
        <i class="mdi mdi-close align-middle" onclick="app.tasksController.deleteTask('${this.id}')"></i>
      </div>
    </div>`
  }
}