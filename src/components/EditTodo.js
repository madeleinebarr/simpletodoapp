import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {

    const endpoint = "https://b35jbn.deta.dev/todos";

    const [item, setItem] = useState(todo.item);

    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const body = { item };
            console.log(body);

            const response = await fetch(`${endpoint}/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
              });

        
              window.location = "/simpletodoapp/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.id}`}>
            Edit
            </button>

            <div className="modal" id={`id${todo.id}`} onClick={() => setItem(todo.item)}>
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button type="button" className="close" data-dismiss="modal" onClick={() => setItem(todo.item)}>&times;</button>
      </div>

      <div className="modal-body">
        <input type="text" className="form-control" value={item} onChange={e => setItem(e.target.value)} />
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateItem(e)}>Edit</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setItem(todo.item)}>Close</button>

      </div>

    </div>
  </div>
</div>
        </Fragment>
      );
}

export default EditTodo;