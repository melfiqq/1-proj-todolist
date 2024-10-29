import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {v1} from "uuid";
import { TaskType } from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed'

type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

type TasksStateType = {
  [key: string]: Array<TaskType>
}

function App() {


  let todolistId1 = v1()
  let todolistId2 = v1()

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    {id: todolistId1, title: "what to learn", filter: "all"},
    {id: todolistId2, title: "what to learn", filter: "all"},
  ])

  let [tasksObj, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'ReactJS&CSS', isDone: false},
      {id: v1(), title: 'React API', isDone: false},
      {id: v1(), title: 'GraphQL', isDone: false}],
    [todolistId2]: [
      {id: v1(), title: 'Book', isDone: true},
      {id: v1(), title: 'Milk', isDone: true},
    ]
  })



  return (
    <div className="App">
      
      {

      }

    </div>
  );



}

export default App;
