import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';

const url = 'http://127.0.0.1:8080/login';

function loginApi (email, password) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(json => json)
        .catch((error) => { throw error })
}

function* authorize(action) {
    let loginResponse
    try {
        loginResponse = yield call(loginApi, action.payload.email, action.payload.password)
        if (loginResponse.token !== undefined){
            yield put(loginSuccess(loginResponse.user))
            localStorage.setItem('token', JSON.stringify(loginResponse.token))
        } else if (loginResponse.error !== undefined) {
            yield put(loginFailure(loginResponse))
        }
    } catch (error) {
        console.log(error)
    }
    return loginResponse
}

function* Saga() {
    yield takeLatest(LOGIN_REQUEST, authorize);
}

export default Saga;
