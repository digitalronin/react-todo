import {
  RENDER_TODO_LIST,
  USER_PROFILE_LOADED,
  REORDER_LIST
} from '../actions';

const initialState = {
  toDoList: []
};

function reorderList(list, ids) {
  return ids.map(id =>
    list.find(obj => {
      return obj._id === id;
    })
  );
}

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: action.user
      };
    case REORDER_LIST:
      return {
        ...state,
        toDoList: reorderList(state.toDoList, action.listIds)
      };
    default:
      return state;
  }
}
