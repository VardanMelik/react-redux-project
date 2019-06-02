import { createStore } from 'redux'

const initialState = {
    name: 'Paul',
    secondName: 'Petrov'
}

function reducer(state, action) {
    console.log(state)
    console.log(action)

}

const store = createStore(reducer)

const changeName = {
    type: 'CHANGE_NAME',
    payload: 'Ivan'
}

const changeSecondName = {
    type: 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
}
store.dispatch(changeName)