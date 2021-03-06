import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  ADD_TODO,
  LOAD_TODO_LIST,
  RENDER_TODO_LIST,
  REORDER_LIST,
  HANDLE_AUTHENTICATION_CALLBACK,
  USER_PROFILE_LOADED
} from '../actions';
import { handleAuthentication } from '../Auth';

const API = 'http://localhost:4567/api';

export function* fetchToDoList() {
  const response = yield call(fetch, API);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export function* parseHash() {
  const user = yield call(handleAuthentication);
  yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
  yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export function* addToDoItem() {
  yield takeEvery(ADD_TODO, asyncAddToDoItem);
}

export function* asyncAddToDoItem(action) {
  const response = yield call(fetch, API, {
    method: 'POST',
    body: JSON.stringify(action.toDoItem),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* reorderList() {
  yield takeLatest(REORDER_LIST, asyncReorderList);
}

export function* asyncReorderList(action) {
  const endpoint = `${API}/reorder`;
  const response = yield call(fetch, endpoint, {
    method: 'PUT',
    body: JSON.stringify(action.listIds),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export default function* rootSaga() {
  yield all([
    loadToDoList(),
    addToDoItem(),
    reorderList(),
    handleAuthenticationCallback()
  ]);
}
