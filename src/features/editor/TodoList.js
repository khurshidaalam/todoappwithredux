import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addData,deleteData } from "./todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const [item, setListItem] = useState("")
    const todos = useSelector(state => state.todos);

    

    const renderList = todos.map((todo, index) => {
        return <li className='listitem' key={todo.id}>{todo.item}
        <button >/</button> 
        <button onClick={()=>dispatch(deleteData({id:todo.id}))}>-</button></li>;
    }) 

    const saveonClick = () => {
        
        if ( item) {
            dispatch(addData({
                id: nanoid(),
                item
            }))
            setListItem((prev) => prev);
            console.log(renderList);
        }
    }


    return (
        <div>
            <div className='centerdiv'>
                <h1>to do list app</h1>
                <div className='addlist'>
                    <input type="text" placeholder="add to do" value={item} onChange={(e) => setListItem(e.target.value)} />
                    <button onClick={saveonClick}>+</button>
                </div>
                <ol>
                    {renderList}
                </ol>
            </div>
        </div>
    )
}

export default TodoList