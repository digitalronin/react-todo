import {
  ADD_TODO,
  RENDER_TODO_LIST,
  USER_PROFILE_LOADED,
  REORDER_LIST
} from '../actions';

const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: action.user
      };
    case REORDER_LIST:
      console.log('REORDER_LIST', action.listIds);
      return state;
    default:
      return state;
  }
}
