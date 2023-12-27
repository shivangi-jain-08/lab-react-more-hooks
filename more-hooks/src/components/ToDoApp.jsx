import React, { useRef,useReducer } from 'react'
import TodoItem from './TodoItem'

const initalState = [
    {
        data:"First Item",
        isHidden:"false"
    }
]

const todoReducer=(state,action)=>{
    if(action.type =="ADD_ITEM"){
        return [
            ...state,{
                data:action.payload,
                isHidden: false
            }
        ]
    }
    if(action.type=="CHANGE_ISHIDDEN"){
        return state.map((e,i)=>{
          return i==action.payload?{...e,isHidden:!e.isHidden}:e
        })
    }
    return state
}

const TodoApp = () => {

    const [todo , dispatch]= useReducer(todoReducer,initalState)
    console.log(todo);

    const input = useRef(null)

    
  return (
    <div>
        <input style={{
            width:"30vw",
            height:"4vh",
            margin:"20px 0", 
            padding:"0 10px",
        }}  placeholder="Enter a item" ref={input} type="text" onKeyDown={(e)=>{
            if(e.key=="Enter"){
                dispatch({type:"ADD_ITEM",payload:e.target.value})
            }
        }}/>

        {/* loop through todo state using map */}
        {todo.map((e,i)=>{
            return <TodoItem item={e} index={i} dispatch={dispatch}/>
        })}

        <button style={{
            backgroundColor:"#51074a",
            opacity:"0.9",
            color:"#white",
            margin:"30px 0",
        }} onClick={()=>{
            input.current.focus()
            // window.scrollTo({top:0,behaviour:"smooth"})
        }}>Go Back to Top</button>
    </div>
  )
}

export default TodoApp