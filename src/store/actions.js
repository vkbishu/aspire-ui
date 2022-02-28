// root actions
import cardService from "../service/card-service";
export default {
    getAppState({commit}){
        cardService.getAppState()
        .then(res => {
            commit('SET_APP_STATE', res.data.data);
        })
    }
}