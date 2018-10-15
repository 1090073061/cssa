import { ADD_TODO, CLEAR_TODO } from '../actions'

const initState = [
  'Todo',
]

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case CLEAR_TODO:
      return []
    default:
      return state
  }
}
