import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksServices.js";
import { Pop } from "../Utils/Pop.js";

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

  async deleteTask(id){
    if (await Pop.confirm('Delete?', 'This will remove your task from the list.', 'question', 'Delete'))
    tasksService.deleteTask(id)
    Pop.toast('Task successfully deleted', 'success', 'center', 1000)
  }

  checkboxValue(taskId) {
    tasksService.checkboxValue(taskId)
  }
}