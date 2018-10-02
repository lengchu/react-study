import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as accActions } from '../redux/modules/Account'
import AccList from './AccList'
import AccDetials from './AccDetials'
import AccAdd from './AccAdd'

class AccountContainer extends Component {

    render() {
      const { match } = this.props
      return (
        <Switch>
            <Route exact path={match.url} render={props => (
                <AccList {...props} accs={this.props.accs.toJS()} />
            )} />
            <Route path={`${match.url}/add`} render={props => (
                <AccAdd {...props} 
                    addAcc={this.props.addAcc}
                    genId={this.mockGenId}
                />
            )} />
            <Route path={`${match.url}/:id`} render={props => (
                <AccDetials {...props} 
                    getAccById={this.getAccById}
                    updateAcc={this.props.updateAcc}
                    deleteAcc={this.props.deleteAcc}
                />
            )} />
        </Switch>
      )
    }

    getAccById = id => this.props.accs.toJS()[id]

    mockGenId = () => this.props.ids.toJS().pop() + 1
}

const mapStateToProps = (state) => {
    const accs = state.get('account').get('accs')
    const ids = state.get('account').get('ids')
    // console.log(accs)
    // console.log(ids)
    return {
        accs,
        ids
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(accActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)
