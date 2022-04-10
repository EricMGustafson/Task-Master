import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { Pop } from "../Utils/Pop.js";




class TasksServices {
  constructor() {
    console.log('Hello from the tasks Services');
  }
  checkboxValue(taskId, taskText) {
    let task = ProxyState.tasks.find(t => t.id == taskId)
    task.checkbox = !task.checkbox
    ProxyState.tasks = ProxyState.tasks
    if (task.checkbox) {
      Pop.toast('Congrats! You have completed the task:   ' + taskText + '!', 'success', 'center', 2000)
    }
  }

  addTask(formData) {
    let task = new Task(formData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  } 

  deleteTask(id) {
   ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== id)
    }
}


export const tasksService = new TasksServices()