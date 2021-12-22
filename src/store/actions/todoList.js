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
    }),
    update:(id,todo)=>dispatch=>new Promise((resolve,reject)=>{
        try {
            dispatch({
                type : actionTypes.UPDATE_TODO,
                id,
                todo
            })
            resolve("success")
        } catch (error) {
            reject(error)
        }
    }),
    delete:(id,todo)=>dispatch=>new Promise((resolve,reject)=>{
        try {
            dispatch({
                type : actionTypes.DELETE_TODO,
                id
            })
            resolve("success")
        } catch (error) {
            reject(error)
        }
    })
}
