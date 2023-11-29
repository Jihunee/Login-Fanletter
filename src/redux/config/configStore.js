import { configureStore } from "@reduxjs/toolkit";
import member from "redux/modules/member";

// const rootReducer = combineReducers({
//   member,
// });
// const store = createStore(rootReducer);

// export default store;

const store = configureStore({
  reducer: {
    member,
  },
});

export default store;
