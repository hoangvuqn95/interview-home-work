import { call, put, takeLatest } from "redux-saga/effects";
import { loadPostFail, loadPostSuccess } from "./actions";
import { loadPostApi } from "./api";

export function* onLoadPostStartAsync() {
  try {
    // do api call
    const response = yield call(loadPostApi);

    // get data
    yield put(loadPostSuccess(response.data));
    // console.log("data sagas.js: ", response.data);
  } catch (error) {
    yield put(loadPostFail(error));
  }
}

export function* onLoadPost() {
  yield takeLatest("LOAD_POST_START", onLoadPostStartAsync);
}
