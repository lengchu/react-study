import React, { Component } from 'react'
import './AccDetials.css'

export default class AccDetials extends Component {

  constructor(props) {
    super(props)
    const { match } = this.props
    const id = match.params.id
    const acc = this.props.getAccById(id)
    this.state = {
      isEdit: false,
      ...acc
    }
  }

  render() {
    return (
      <table className="table" style={{
        fontSize: '24px',
        width: '60%',
        margin: 'auto',
        marginTop: '2em',
        minWidth: '600px',
        textAlign: 'center'
      }}>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{this.state.id}</td>
        </tr>
        <tr>
          <th>AccName</th>
          <td>
            {this.state.isEdit ? 
              (<input className="form-control" name="accName" 
                value={this.state.accName}
                onChange={this.handleChange}
              />) :  
              (<span>{this.state.accName}</span>)
            }
          </td>
        </tr>
        <tr>
          <th>UserName</th>
          <td>
            {this.state.isEdit ? 
              (<input className="form-control" name="username" 
                value={this.state.username}
                onChange={this.handleChange}
              />) :  
              (<span>{this.state.username}</span>)
            }
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            {this.state.isEdit ? 
              (<input className="form-control" name="password" 
                value={this.state.password}
                onChange={this.handleChange}
              />) :  
              (<span>{this.state.password}</span>)
            }
          </td>
        </tr>
        <tr>
          <th>HomePage</th>
          <td>
            {this.state.isEdit ? 
              (<input className="form-control" name="homepage" 
                value={this.state.homepage}
                onChange={this.handleChange}
              />) :  
              (<span>{this.state.homepage}</span>)
            }
          </td>
        </tr>
        <tr>
          <th>Comment</th>
          <td>
            {this.state.isEdit ? 
              (<input className="form-control" name="comment" 
                value={this.state.comment}
                onChange={this.handleChange}
              />) :  
              (<span>{this.state.comment}</span>)
            }
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn btn-info"
              onClick={() => {
                this.props.history.push('/acc')
              }}>
              Back
            </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary"
              onClick={() => {
                this.state.isEdit ? 
                  this.handleUpdate() : 
                  this.setState({isEdit: true})
              }}>
              {this.state.isEdit ? 'Done' : 'Edit'}
            </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger"
              onClick={() => {
                this.props.deleteAcc(this.state.id)
                this.props.history.push('/acc')
              }}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      </table>
    )
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleUpdate = () => {
    this.setState({isEdit: false})
    this.props.updateAcc(this.state.id, {
      id: this.state.id,
      accName: this.state.accName,
      username: this.state.username,
      password: this.state.password,
      homepage: this.state.homepage,
      comment: this.state.comment
    })
  }
}
