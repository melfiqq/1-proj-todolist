import { v1 } from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type ActionType = 
  | { type: 'ADD-TODOLIST'; payload: { title: string } };

export const todolistsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
  switch (action.type) {
    case 'ADD-TODOLIST': {
      const newTodolist: TodolistType = {
        id: v1(),
        title: action.payload.title,
        filter: 'all',
      };
      return [...state, newTodolist]; /*it has to return new array where it will put all the todolists existed + new todolist which was added*/
    }
    default:
      return state;
  }
};
