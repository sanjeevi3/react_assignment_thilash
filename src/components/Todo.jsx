import { useState } from "react";
import { connect } from "react-redux";
const Todo = props =>{
    const [isView,setIsview]=useState(true)

    return(
        <div className="todo">
            <p>{props.todo}</p><button>edit</button> <button>edit</button>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return{

    }
}
export default connect(null,mapDispatchToProps)(Todo)