import { userReducer } from "./user-reducer";


test('user reducer should increment age only', () => {
    const startState = {age: 20, childrenCount: 25, name: 'Maryia'}
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer should increment childrenCount only', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Maryia'}
})