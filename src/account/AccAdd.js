import React, { Component } from 'react'

export default class AccAdd extends Component {

  constructor(props) {
      super(props)
      this.state = {
          accName: '',
          username: '',
          password: '',
          homepage: '',
          comment: ''
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
          <th>AccName</th>
          <td>
            <input className="form-control" name="accName" 
                value={this.state.accName}
                onChange={this.handleChange}
            />
          </td>
        </tr>
        <tr>
          <th>UserName</th>
          <td>
            <input className="form-control" name="username" 
                value={this.state.username}
                onChange={this.handleChange}
            />
          </td>
        </tr>
        <tr>
          <th>Password</th>
          <td>
            <input className="form-control" name="password" 
                value={this.state.password}
                onChange={this.handleChange}
            />
          </td>
        </tr>
        <tr>
          <th>HomePage</th>
          <td>
            <input className="form-control" name="homepage" 
                value={this.state.homepage}
                onChange={this.handleChange}
            />
          </td>
        </tr>
        <tr>
          <th>Comment</th>
          <td>
            <input className="form-control" name="comment" 
                value={this.state.comment}
                onChange={this.handleChange}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button className="btn btn-warning"
              onClick={() => {
                this.props.history.push('/acc')
              }}>
              Cancle
            </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-info"
              onClick={() => {
                this.handleSave()
                this.props.history.push('/acc')
              }}>
              Save
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

  handleSave = () => {
    this.props.addAcc({
        id: this.props.genId(),
        accName: this.state.accName,
        username: this.state.username,
        password: this.state.password,
        homepage: this.state.homepage,
        comment: this.state.comment
    })
    alert('success')
  }
}
