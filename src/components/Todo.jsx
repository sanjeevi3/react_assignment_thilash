import { createRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
const Todo = props => {
    const [isView, setIsview] = useState(true)
    let todo = createRef();
    useEffect(() => {
        if (!isView){
            todo.current.value = props.todo;
            todo.current.focus()
        }
    }, [isView])
    const updateTodo = (id) => {
        if(todo.current.value){
            props.updateTodo(id, todo.current.value).then(data => {
                setIsview(true)
                alert("succesfully update todo")
            })
        }
        else
        alert("todo is should not be empty.")
        
    }

    const deleteTodo = (id) => {
        if (window.confirm("Are you sure delete this todo ?"))
            props.deleteTodo(id).then(data => {
                alert("successfully delete todo")
            })
    }
    return (
        <div className="border px-2 py-2 mb-2 row">
            {   isView ?
                <>
                    <div className="col-6">
                        <p className=" font-weight-bold text-capitalize">{props.todo}</p>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary mr-2" onClick={() => setIsview(false)}>edit</button>
                        <button className="btn btn-danger" onClick={() => deleteTodo(props.id)}>delete</button>
                    </div>
                </>
                :
                <>
                    <div className="col-6">
                        <input className="form-control" ref={todo}  type={"text"} />
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-success mr-2" onClick={() => updateTodo(props.id)}>update</button>
                        <button className="btn btn-danger" onClick={() => setIsview(true)}>cancel</button>
                    </div>
                </>
            }
        </div >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: (id, todo) => dispatch(actions.todoList.update(id, todo)),
        deleteTodo: (id) => dispatch(actions.todoList.delete(id)),
    }
}
export default connect(null, mapDispatchToProps)(Todo)