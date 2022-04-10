import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Pop } from "../Utils/Pop.js";

class ListsService {
  constructor() {
    console.log('Hello from the lists Service');
  }
  addList(formData) {
    if (formData.color.includes('Choose')) {
      Pop.toast('You must choose a priority', 'warning', 'top', 2000)
    } else {
    const list = new List(formData)
    ProxyState.lists = [...ProxyState.lists, list]
    }
  }
  deleteList(listId) {
   ProxyState.lists =  ProxyState.lists.filter(l => l.id !== listId)
  }
}


export const listsService = new ListsService()