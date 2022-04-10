import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";



class TasksServices {
  constructor() {
    console.log('Hello from the tasks Services');
  }
  checkboxValue(taskId) {
    let curCount = 0
    let task = ProxyState.tasks.find(t => t.id == taskId)
    task.checkbox = !task.checkbox
    ProxyState.tasks = ProxyState.tasks
    if (task.checkbox) {
      curCount += 1
    } else {
      curCount -= 1
    }
    console.log(curCount);
    document.getElementById('curCount').innerText = curCount.toString()
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