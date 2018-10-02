import React, { Component } from 'react'

export default class AccList extends Component {

  render() {
    const { match, history } = this.props
    const accs = []
    for (let key in this.props.accs)
      accs.push(this.props.accs[key])
    return (
      <div>
        <table className="table" style={{
          fontSize: '24px',
          textAlign: 'center',
          width: '60%',
          margin: 'auto',
          marginTop: '2em',
          minWidth: '600px'
        }}>
          <thead>
            <tr>
              <th>AccountName</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {
              accs.map(acc => (
                <tr key={acc.id} 
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    history.push(`${match.url}/${acc.id}`)
                }}>
                  <td>{acc.accName}</td>
                  <td>{acc.username}</td>
                </tr>
              ))
            }
            <tr>
              <td colSpan="2">
                <button className="btn btn-light" 
                  style={{fontSize: '20px', width: '12em'}}
                  onClick={() => {
                    history.push(`${match.url}/add`)
                  }}
                >Add an Account
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
