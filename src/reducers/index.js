import { RENDER_TODO_LIST, USER_PROFILE_LOADED } from '../actions';

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
    case USER_PROFILE_LOADED:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
