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
    <div class="mb-3">
      <input type="checkbox"><span>${this.text}</span>
    </div>`
  }
}