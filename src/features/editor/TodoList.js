import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addData, deleteData, updateData } from "./todoSlice";
import styles from "../../styles/todolist.module.css";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Pagination from '@mui/material/Pagination';
import usePagination from "../../hooks/pagination";

const TodoList = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState();
    const [item, setListItem] = useState("");
    const [updatedId, setUpdatedId] = useState("");
    const todos = useSelector(state => state.todos);
    const per_page = 5;

    const count = Math.ceil(todos.length / per_page);
    const _DATA = usePagination(todos, per_page);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const updateItem = (data)=>{
        if (data) {
            setListItem(data.item);
            setUpdatedId(data.id);
            console.log(data.id)
        }
    }
    const handleUpdatedData = ()=>{
        if (item) {
            dispatch(updateData({
                id: item.id,
                item
            }))
        }

        setListItem("");
    }

    const renderList = _DATA.currentData().map((todo, index) => {
        return <li className={styles.listitem} key={todo.id}>
            <span>{todo.item}</span>
            <IconButton
                className={styles.update}
                onClick={() => updateItem(todo)}>
                <EditIcon />
            </IconButton>

            <IconButton
                className={styles.delete}
                onClick={() => dispatch(deleteData({ id: todo.id }))}>
                <ClearIcon />
            </IconButton>
        </li>;
    })

    

    const saveonClick = () => {
        if (item) {
            dispatch(addData({
                id: nanoid(),
                item
            }))
        }

        setListItem("");
    }


    return (
        <div className={styles.maindiv}>
            <Paper className={styles.centerdiv} elevation={3}>
                <h1>to do list app</h1>

                <br></br>

                <div className={styles.addlist}>
                    <input type="text" placeholder="Add to do" value={item} onChange={(e) => setListItem(e.target.value)} />

                    {
                        updatedId ? <IconButton
                        className={styles.update}
                        onClick={() => handleUpdatedData()}>
                        <EditIcon />
                    </IconButton> : <IconButton variant="contained" color="primary" className={styles.addbtn} onClick={saveonClick}><LibraryAddIcon /></IconButton>
                    }

                </div>
                <div >
                    <ul className='todo-list' p="5">
                        {renderList}
                    </ul>


                    <Pagination
                        color="primary"
                        count={count}
                        size="medium"
                        page={page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}

                    />
                </div>
            </Paper>
        </div>
    )
}

export default TodoList