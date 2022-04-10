import { listsService } from "../Services/ListsServices.js";
import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"

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
      formElem.reset()
    } catch (error) {
      console.error('ADD LIST ERROR')
      
    }
  }
  async deleteList(listId, listText) {
    if (await Pop.confirm('Remove?', 'This will delete your ' + listText + ' list.', 'question', 'Remove')) {
      listsService.deleteList(listId)
      Pop.toast('List successfully removed', 'success', 'center', 1000)
      }
    }

    // deleteList(listId) {
    //   if (window.confirm('Are you sure')){
    //     listsService.deleteList(listId)
    //   }
    // }
  }
