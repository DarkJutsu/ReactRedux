import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from "../sagas/sagas";

export const createAppStore = () => {
  let store = configureStore(
    {
      reducer: {
        rootReducer,
      },
    },
    composeWithDevTools()
  );
  return store;
};

export const createAppAsyncStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = configureStore(
    {
      reducer: {
        rootReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    },
    composeWithDevTools()
  );

  sagaMiddleware.run(watcherSaga);

  return store;
};
