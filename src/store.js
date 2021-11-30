import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import apiReducer from "./modules/api/reducer";
import apiRootSaga from "./modules/api/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        : compose;

const reducers = combineReducers({
    api: apiReducer
});

const sagaMiddleware = createSagaMiddleware();



const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(apiRootSaga);

export default store;

// const createAppStore = () => {

//     const Store = createStore(
//       reducers,
//       composeEnhancers(applyMiddleware(sagaMiddleware))
//     );
//     sagaMiddleware.run(apiRootSaga);
//     return Store;
// }

// export default createAppStore();

