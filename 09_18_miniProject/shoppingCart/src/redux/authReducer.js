//const initialState = {user: {}, isLoading: false, isLoggedIn: false, error: null};
const initialState = {
    user: !!sessionStorage.getItem('AUTH_TOKEN') ? JSON.parse(sessionStorage.getItem('user')) || {} : {},
    isLoggedIn: !!sessionStorage.getItem('AUTH_TOKEN'),
    isLoading: false,
    error: null
  };

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});
export const logout = () => ({
    type: LOGOUT
});

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            return {...state, isLoading: false, isLoggedIn: true, user: action.payload, error: null};
        case LOGIN_FAILURE:
            return {...state, isLoading: false, isLoggedIn: false, user: {}, error: action.payload};
        case LOGOUT:
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('AUTH_TOKEN');
            return {...state, isLoading: false, isLoggedIn: false, user: {}, error: null};
        default:
            return state;
    }
};