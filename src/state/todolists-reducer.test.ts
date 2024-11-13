import { v1 } from "uuid"
import { todolistsReducer } from "./todolists-reducer"
import { TodolistType } from "./todolists-reducer"
import { ActionType } from "./todolists-reducer"

test('correct todolist should be added', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
   
    const startState: TodolistType[] = [
      { id: todolistId1, title: 'What to learn', filter: 'all' },
      { id: todolistId2, title: 'What to buy', filter: 'all' },
    ]
   
    const action: ActionType = {
      type: 'ADD-TODOLIST',
      payload: {
        title: 'New Todolist', /* it has to change todolist title of NewTodolist. */
      },
    }
    const endState = todolistsReducer(startState, action)

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(action.payload.title)
  })