import { configureStore } from "@reduxjs/toolkit";
import CounterState from "../reducers/ToDoList";

export const store = configureStore({
  reducer: {
    counter: CounterState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
