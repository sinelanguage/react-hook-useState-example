import React, { useState } from "react";

// https://reactjs.org/docs/hooks-state.html for reference
// signature for this hook is you destructure two given values
// from the useState Hook: the first one is the state that is maintained across renders and
// the function that returns a new state, you get these for free
// const [
//  <yourCustomStateProperty>,
//  <setyourCustomStateProperty(use defined callback to setState)>
// ] = useState(InitialStateValueCanBeAnything)
// your setState callback can do anything as long as its pure and returns the expected
// new state format and type

const HookUseStateExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: "First to do item" }]);
  return (
    <div>
      <h1>Hook: useState Example</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button
        onClick={() => {
          setCount(count + 1);
          setTodos([
            ...todos,
            { text: `Wazzup: State variable count = ${count}` }
          ]);
        }}
      >
        Add Todo
      </button>
      <p>{count}</p>
      <ul>
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseStateExample;
