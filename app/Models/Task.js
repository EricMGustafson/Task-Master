import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor() {
    this.id = generateId()
  }
}