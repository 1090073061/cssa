import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Form, Button } from 'reactstrap'
import FieldGroup from '../components/FieldGroup'
import { addTodo, clearTodo } from '../actions'

class TodoForm extends Component {
  constructor() {
    super()

    this.state = {
      item: 'New Item',
    }
  }

  shouldComponentUpdate(_, { item }) {
    return this.state.item !== item
  }

  render() {
    const { dispatch } = this.props
    const { item } = this.state

    const buttons = [
      {
        color: 'primary',
        name: 'ADD',
        onClick: () => {
          dispatch(addTodo(item))
        },
      }, {
        color: 'danger',
        name: 'CLEAR',
        onClick: () => {
          dispatch(clearTodo())
        },
      },
    ]

    return (
      <Form style={{ marginTop: 20 }}>
        <FieldGroup
          value={item}
          onChange={(e) => {
            this.setState({ item: e.target.value })
          }}
        />
        <Row>
          {
            buttons.map((button, i) => (
              <Button
                key={i}
                color={button.color}
                onClick={button.onClick}
                style={{ marginLeft: 20 }}
              >
                {button.name}
              </Button>
            ))
          }
        </Row>
      </Form>
    )
  }
}

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(TodoForm)
