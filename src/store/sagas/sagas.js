import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { API_CALL_REQUEST } from "../actions/asyncActions";

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

export function* workerSaga(action) {
  try {
    const res = yield call(fetchHttp(action.payload.request));
    const token = res.data.token;
    yield put({
      type: action.payload.okAction,
      payload: {
        token: token,
      },
    });
  } catch (err) {
    yield put({
      type: action.payload.failAction,
      payload: {
        err: err.message,
      },
    });
  }
}

export function fetchHttp(request) {
  return function () {
    return axios(request);
  };
}
