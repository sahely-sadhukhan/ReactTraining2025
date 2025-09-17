const initialState = {acountDtls: {name:'Sahely', accountNo: '423423', balance: 5000}};

const ADD_BALANCE = 'ADD_BALANCE';
const WITHDRAW_BALANCE = 'WITHDRAW_BALANCE';

export const addBalance = (amount) => ({
    type: ADD_BALANCE,
    payload: amount
});

export const withdrawBalance = (amount) => ({
    type: WITHDRAW_BALANCE,
    payload: amount
});

export const balanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_BALANCE:
            return {...state, acountDtls: {...state.acountDtls, balance: state.acountDtls.balance + action.payload}};
        case WITHDRAW_BALANCE:
            return {...state, acountDtls: {...state.acountDtls, balance: state.acountDtls.balance - action.payload}};
        default:
            return state;
    }
};