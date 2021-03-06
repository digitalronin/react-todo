export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';
export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';
export const REORDER_LIST = 'REORDER_LIST';

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      title
    }
  };
}

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK
  };
}

export function reorderList(listIds) {
  return {
    type: REORDER_LIST,
    listIds
  };
}
