import {createRef} from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

const AddTodoForm = (props)=>{
    const validate=(schemaList,dataList)=>new Promise((resolve,reject)=>{
        let error = {};
        for (const name in schemaList) {
            let schema = schemaList[name];
            let data = dataList[name];
            if(schema.required && !data) error={...error,name:`${schema.title} is required.`}
            else if(schema.min&&schema.min>data.length) error={...error,name:`${schema.title} is must be ${schema.min} character.`};
        }
        if(error){
            reject(error);
        }
        else{
            resolve(dataList)
        }
    })
        
    let todo=createRef()
    const addTodoFormHandler=event=>{
        event.preventDefault();
        console.log();
        if(todo.current.value){
        props.addTodo(todo.current.value).then(data=>{
            console.log(data);
            todo.current.value=""
        })
    }
    else alert("todo is required.")
    }
    return(
        <form onSubmit={addTodoFormHandler}>
            <div className="row justify-content-center">
                <div className="col-3 mr-2"><input className="form-control" type={"text"} ref={todo} /></div>
                <div className="col-3 mr-2"><input className="btn btn-info float-left" type="submit" value="Add" /></div>
            </div>
            
            
        </form>
    )
}
const mapDispatchToProps=dispatch=>{
    return {
        addTodo:todo=>dispatch(actions.todoList.add(todo))
    }
}
export default connect(null,mapDispatchToProps)(AddTodoForm)