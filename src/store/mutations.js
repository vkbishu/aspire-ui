// root mutations

export default {
    SET_APP_STATE(state, payload){
        state.balance = payload.balance;
        state.currency = payload.currency;
    }
}