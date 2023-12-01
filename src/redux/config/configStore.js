import { configureStore } from "@reduxjs/toolkit";
import member from "redux/modules/member";
import user from "redux/modules/user";
import auth from "redux/modules/auth";

// const rootReducer = combineReducers({
//   member,
// });
// const store = createStore(rootReducer);

// export default store;

const store = configureStore({
  reducer: {
    member,
    user,
    auth,
  },
});

export default store;
