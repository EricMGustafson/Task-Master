import { listsService } from "../Services/ListsServices.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _drawLists() {
  let listsTemplate = ''
  ProxyState.lists.forEach(l => listsTemplate += l.Template)
  document.getElementById('lists').innerHTML = listsTemplate
}

export class ListsController{
  constructor() {
    console.log('Hello from the List Controller');
    ProxyState.on('lists', _drawLists)  
    ProxyState.on('tasks', _drawLists)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)

    loadState()
    _drawLists()
  }

  addList() {
    window.event.preventDefault()
    try {
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        list: formElem.list.value,
        color: formElem.color.value
      }
      listsService.addList(formData)
    } catch (error) {
      console.error('ADD LIST ERROR')
      
    }
  }
  deleteList(listId) {
    listsService.deleteList(listId)
  }

}