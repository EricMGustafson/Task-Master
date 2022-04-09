import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({id, text, checkbox, listId}) {
    this.checkbox = checkbox || ''
    this.id = id || generateId()
    this.listId = listId
    this.text = text
  }
  
  get Template() {
    return `
    <div class="mb-3" id="${this.id}">
      <input id="checkbox" type="checkbox" autocomplete="on" onclick="app.tasksController.checkboxValue()" ${this.checkbox}>
      <span>${this.text}</span>
      <i class="mdi mdi-close mdi-24px" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>`
  }
}