import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor({id, text, checkbox, listId}) {
    this.checkbox = checkbox
    this.id = generateId()
    this.listId = listId
    this.text = text
  }
  
  get Template() {
    return `
    <div class="mb-3" id="${this.id}">
      <input type="checkbox"><span>${this.text}</span><i class="mdi mdi-close" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>`
  }
}