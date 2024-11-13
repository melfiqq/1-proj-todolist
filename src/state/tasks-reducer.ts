import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";

// Actions types
export type Action1Type = {
	type: '1';
	payload: {
		id: string;
	}
}

export type Action2Type = {
	type: '2';
	payload: {
		title: string;
	}
};

type ActionsType = Action1Type | Action2Type

let todolistID1 = v1()
let todolistID2 = v1()

const initialState: TodolistType[] = [
	{id: todolistID1, title: 'What to learn', filter: 'all'},
	{id: todolistID2, title: 'What to buy', filter: 'all'},
]

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
	switch (action.type) {
        case '1': {
            return {...state}
        }
        case '2': {
            return {...state}
        }
		default:
			throw new Error("I don't understand this type")
	}
}

// Action creators = AC
export const action1AC = (todolistId: string): Action1Type => {
	return {type: '1', payload: {id: todolistId}} as const
}

export const action2AC = (title: string): Action2Type => {
	return {type: '2', payload: {title}} as const
};