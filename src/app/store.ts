import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Purpose: This file is responsible for creating and configuring the Redux store.

// configureStore: A function provided by Redux Toolkit that creates a store with good defaults, like enabling the Redux DevTools extension and setting up middleware like redux-thunk.
// reducer: The root reducer of the application, which combines all the individual slices of the state.
