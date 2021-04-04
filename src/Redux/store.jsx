import { createStore } from "redux";
import rootReducer from "./reducers";
// import StateLoader from "./StateLoader"
// const stateLoader = new StateLoader();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  // console.log(store.getState())
  // stateLoader.saveState(store.getState());
});
export default store;
