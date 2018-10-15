export const ADD_TODO = 'ADD_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
})

export const clearTodo = () => ({
  type: CLEAR_TODO,
})
