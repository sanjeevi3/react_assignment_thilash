import {createRef} from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

const AddTodoForm = (props)=>{
    let todo=createRef()
    const addTodoFormHandler=event=>{
        event.preventDefault();
        console.log(todo.current.value);
        props.addTodo(todo.current.value).then(data=>{
            console.log(data);
            todo.current.value=""
        })
    }
    return(
        <form onSubmit={addTodoFormHandler}>
            <input type={"text"} ref={todo} />
            <input type="submit" />
        </form>
    )
}
const mapDispatchToProps=dispatch=>{
    return {
        addTodo:todo=>dispatch(actions.todoList.add(todo))
    }
}
export default connect(null,mapDispatchToProps)(AddTodoForm)