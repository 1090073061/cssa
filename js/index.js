import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import TodoList from './containers/TodoList'
import TodoForm from './containers/TodoForm'

const store = configureStore()

render((
  <Provider store={store}>
    <Container>
      <TodoList />
      <TodoForm />
    </Container>
  </Provider>
), document.getElementById('root'))
