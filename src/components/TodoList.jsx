import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = props=>{
    console.log(props.todoList)
    return (
        <div>
            {
                props.todoList.map((todo, index)=>{
                   return <Todo key={index} id ={index} todo = {todo} />
                })
            }
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        todoList : state.todoList.data
    }
}

export default connect(mapStateToProps)(TodoList)