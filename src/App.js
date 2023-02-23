import { TodoList } from "components/TodoList";
import { UserList } from "components/UserList";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadUsers } from "./store/users/user-actions";
import { loadTodos } from "store/todos/todos-actions";
import { NewTodo } from "components/NewTodo";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
  }, []);
  return (
    <>
      <h1>Hello Redux Thunk</h1>
      <NewTodo />
      <UserList />
      <TodoList />
    </>
  );
}

export default App;
