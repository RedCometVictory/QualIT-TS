import { FC, ReactElement } from 'react';
import ButtonUI from "../components/UI/ButtonUI";

const loginHandler = () => {
  console.log("logging in");
};

const registerHandler = () => {
  console.log("registering");
};

// const isAuthenticated = true;
const isAuthenticated = false;

const Dashboard: FC = (): ReactElement => {
  if (!isAuthenticated) {
    return (
      <section className="dash">
        <div className="dash__unauth">
          <h3>Please Sign In.</h3>
          <div className="dash__unauth-btns">
            <ButtonUI
              className="dash__unauth-btn"
              variant="contained"
              onClick={loginHandler}
            >
              Sign In  
            </ButtonUI>
            <ButtonUI
              className="dash__unauth-btn"
              variant='outlined'
              onClick={registerHandler}
            >
              Sign Up
            </ButtonUI>
          </div>
        </div>
      </section>
    )
  };
  return (
    <section className="dash">
      <div className="dash__card">
        <div className="dash__heading-sec">
          <div className="dash__header">
            <h2>Title of Header</h2>
          </div>
        </div>
        <div className="dash__content">
          <ul className="dash__list">
            <li className="dash__list-item">1</li>
            <li className="dash__list-item">2</li>
            <li className="dash__list-item">3</li>
            <li className="dash__list-item">4</li>
            <li className="dash__list-item">5</li>
            <li className="dash__list-item">6</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Dashboard;


/* EXAMPLES - NewTodo
import React, { useRef, useEffect } from 'react';

import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;

=======================
EXAMPELS - togolist

import React from 'react';

import './TodoList.css';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
*/