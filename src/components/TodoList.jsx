import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = props=>{
    console.log(" todo list")
    return (
        <div className="row mt-5  justify-content-center">
        <div className="col-md-6">
            <div className="mb-3">
                <h3>TODO LIST</h3>
            </div>
            
            {
                props.todoList.length?props.todoList.map((todo, index)=>{
                   return <Todo key={index} id ={index} todo = {todo} />
                }):
                <div className="text-danger font-weight-bold text-capitalize text center">todo was not found.</div>
            }
        </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        todoList : state.todoList.data,
        data:state.todoList.data[0]
    }
}

export default connect(mapStateToProps)(TodoList)