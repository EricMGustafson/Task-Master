import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksServices {
  constructor() {
    console.log('Hello from the tasks Services');
  }
  addTask(formData) {
    const task = new Task(formData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  } 
}


export const tasksService = new TasksServices()