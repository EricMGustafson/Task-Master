import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksServices.js";

function _drawTasks(){
  let tasksTemplate = ''
  ProxyState.tasks.forEach(t => tasksTemplate += t.Template)
  document.getElementById('tasks').innerHTML = tasksTemplate
}

export class TasksController {
  constructor() {
    console.log('Hello from the Task Controller');
    ProxyState.on('tasks', _drawTasks)
  }

  addTask(){
    window.event.preventDefault()
    try {
      /**@type {HTMLFormElement} */
      // @ts-ignore
      let formElem = window.event.target
      const formData = {
        text: formElem.text.value
      }
      tasksService.addTask(formData)
    } catch (error) {
      console.error('ADD TASK ERROR')
    }
  }
}