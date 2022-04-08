import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  constructor() {
    console.log('Hello from the lists Service');
  }
  addList(formData) {
    const list = new List(formData)
    ProxyState.lists = [...ProxyState.lists, list]
  }
  deleteList(listId) {
   ProxyState.lists =  ProxyState.lists.filter(l => l.id !== listId)
  }
}


export const listsService = new ListsService()