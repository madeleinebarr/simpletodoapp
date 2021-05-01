import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";
import InputTodo from "./InputTodos";

const ListTodos = () => {
  
    const endpoint = "https://b35jbn.deta.dev/todos";

    const [todos, setTodos] = useState([]);


    async function deleteTodo(id) {
        try {
          const res = await fetch(`${endpoint}/${id}`, {
            method: "DELETE",
          });
    
          setTodos(todos.filter((todo) => todo.id !== id));
        } catch (err) {
          console.error(err.message);
        }
      }

    async function getTodos() {
        const res = await fetch(endpoint);
        const todos = await res.json();
        setTodos(todos.data);
    }

    useEffect(() => {
        getTodos();
      }, []);
    


    return (
        <Fragment>
        <InputTodo todos={todos}/>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.item}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </Fragment>
    );
}

export default ListTodos;
