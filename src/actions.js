export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: { email, password }
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: {...user}
})

export const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    payload: {...err},
})
