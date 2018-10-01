import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      todo: props.todo
    }
  }

  render() {
    const Button = this.props.button
    return (
      <tr>
        <td>
          {this.state.isEdit ? 
            (<input value={this.state.todo} 
                    onChange={this.handleChange}
                    style={{
                      fontSize: '1em',
                      textAlign: 'center'
                    }} 
                    onBlur={this.unEdit} 
                    className={'form-control'}
                    ref={input => this.input = input} 
                    onKeyDown={this.keyDownUpdate}
            />) :
            (<span>{this.props.todo}</span>)
          }
        </td>
        <td><Button 
              onClick={this.state.isEdit ? this.handleUpdate : this.edit} 
              text={this.state.isEdit ? 'Done' : 'Edit'} 
              /></td>
        <td><Button onClick={
          () => {this.props.handleDelete(this.props.todo)}
        } text="Delete" className="btn btn-danger" /></td>
      </tr>
    )
  }

  keyDownUpdate = key => {
    if (this.state.isEdit && key.which === 13)
      this.handleUpdate()
  }

  handleUpdate = () => {
    this.props.handleUpdate(this.props.todo, this.state.todo)
    this.setState({
      isEdit: false
    })
  }

  unEdit = () => {
    setTimeout(() => {
      this.setState({
        isEdit: false,
        todo: this.props.todo
      })
    }, 300);
  }

  edit = () => {
    this.setState({
      isEdit: true
    })
    setTimeout(() => {
      if (this.input)
      this.input.focus()
    }, 100)
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
}

export default TodoItem
