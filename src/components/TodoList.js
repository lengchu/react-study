import React, { Component } from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: ['TodoList', 'TodoItem'],
            newTodo: ''
        }
    }

    render() {
        const Button = (props) => {
            return (<button 
                style={{
                    width: '6em',
                    fontSize: '20px'
                }} 
                className={'btn btn-primary'}
                {...props}>{props.text}
            </button>)
        }
        return (
            <table 
                style={{
                    width: '50%',
                    margin: 'auto',
                    marginTop: '1em',
                    fontSize: '1.6em',
                    minWidth: '500px',
                    textAlign: 'center'
                }}
                className={'table'}
            >
            <thead>
                <tr>
                    <th>Todo</th>
                    <th colSpan="2">Operate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.todos.map(item => 
                    <TodoItem todo={item} 
                        key={item} 
                        button={Button} 
                        handleDelete={this.handleDelete} 
                        handleUpdate={this.handleUpdate}
                    />
                )}
                <tr>
                    <td>
                        <input type="text" 
                            value={this.state.newTodo}
                            onChange={this.handleChange}
                            style={{
                                fontSize: '1em',
                                textAlign: 'center'
                            }}
                            className={'form-control'}
                            onKeyDown={this.keyDownAdd}
                        />
                    </td>
                    <td colSpan="2">
                        <Button text="AddTodo" onClick={this.handleAdd} />
                    </td>
                </tr>
            </tbody>
            </table>
        )
    }

    keyDownAdd = (key) => {
        if (key.which === 13)
            this.handleAdd()
    }

    handleAdd = () => {
        if (this.state.newTodo === '')
            alert('todos to add can not be empty')
        else if (this.state.todos.includes(this.state.newTodo))
            alert('this todo already exists')
        else {
            const todos = [...this.state.todos, this.state.newTodo]
            this.setState({
                todos: todos,
                newTodo: ''
            })
        }
    }

    handleDelete = todo => {
        let todos = this.state.todos
        this.setState({
            todos: todos.filter(item => item !== todo)
        })
    }

    handleUpdate = (now, newTodo) => {
        const index = this.state.todos.indexOf(now)
        const todos = [...this.state.todos]
        todos[index] = newTodo
        this.setState({
            todos
        })
    }

    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }
}

export default TodoList
