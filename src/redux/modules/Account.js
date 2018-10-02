import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'

export const types = {
    GETBYID: 'account/getById',
    ADD: 'account/add',
    UPDATE: 'account/update',
    DELETE: 'account/delete'
}

const initialState = Immutable.fromJS({
    accs: {
        1: {
            id: 1,
            accName: 'Github',
            username: 'NLrsylzjj@163.com',
            password: '123qwe',
            homepage: 'github.com',
            comment: '---'
        },
        2: {
            id: 2,
            accName: 'Google',
            username: 'lengchu.cn@gmail.com',
            password: '123qwe',
            homepage: 'google.com',
            comment: '---'
        }
    },
    ids: [1, 2]
})

export const actions = {
    addAcc: acc => ({
        type: types.ADD,
        acc
    }),
    updateAcc: (id, acc) => ({
        type: types.UPDATE,
        id,
        acc
    }),
    getById: (id) => ({
        type: types.GETBYID,
        id
    }),
    deleteAcc: id => ({
        type: types.DELETE,
        id
    })
}

const idReducer = (state = initialState.get('ids'), action = {}) => {
    switch (action.type) {
        case types.ADD: 
            return state.push(action.acc.id)
        case types.DELETE: 
            return state
        default: 
            return state
    }
}

const accsReducer = (state = initialState.get('accs'), action = {}) => {
    switch (action.type) {
        case types.ADD:
            return state.set(`${action.acc.id}`, action.acc)
        case types.UPDATE:
            action.acc.id = action.id
            return state.set(`${action.id}`, action.acc)
        case types.DELETE:
            return state.delete(`${action.id}`)
        default:
            return state
    }
}

const reducer = combineReducers({
    ids: idReducer,
    accs: accsReducer
})

export default reducer
