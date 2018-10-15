import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'

const TodoList = ({ todoList }) => (
  <ListGroup>
    {
      todoList.map((item, i) => (
        <ListGroupItem key={i}>
          {item}
        </ListGroupItem>
      ))
    }
  </ListGroup>
)

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
}

const mapStateToProps = ({ todoList }) => ({ todoList })

export default connect(mapStateToProps)(TodoList)
