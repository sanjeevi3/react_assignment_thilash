import actionTypes from "../actionTypes"
export default {
    add:todo=>dispatch=>new Promise((resolve,reject)=>{
        try {
            dispatch({
                type : actionTypes.ADD_TODO,
                todo
            })
            resolve("success")
        } catch (error) {
            reject(error)
        }
    })
}
