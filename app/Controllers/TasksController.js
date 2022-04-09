import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksServices.js";

export class TasksController {
  constructor() {
    console.log('Hello from the Task Controller');
  }

  addTask(listId){
    window.event.preventDefault()
    try {
      /**@type {HTMLFormElement} */
      // @ts-ignore
      let formElem = window.event.target
      const formData = {
        listId,
        text: formElem.text.value
      }
      tasksService.addTask(formData)
    } catch (error) {
      console.error('ADD TASK ERROR')
    }
  }

  deleteTask(id){
    tasksService.deleteTask(id)
  }
}