import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksServices {
  checkboxValue() {
    document.getElementById('checkbox').toggleAttribute('checked')
  }
  deleteTask(id) {
   ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
    }
  constructor() {
    console.log('Hello from the tasks Services');
  }
  addTask(formData) {
    let task = new Task(formData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  } 
}


export const tasksService = new TasksServices()