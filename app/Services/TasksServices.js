import { Task } from "../Models/Task.js";

class TasksServices { 
  constructor() {
    console.log('Hello from the tasks Services');
  }
}


export const tasksService = new TasksServices()