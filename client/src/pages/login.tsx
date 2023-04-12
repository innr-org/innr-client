import React from 'react';
import classes from '@/styles/Login.module.css'
import TasksItem from "@/Components/TasksItem";

export default function login () {

    return (
        <div className={classes.login}>
            <h1 className={classes.button}>Login Page</h1>
            <TasksItem/>
        </div>
    );
};

