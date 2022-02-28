import http from './http-service';
import api from "@/config/url";

export default {
    getCards(){
        return http.get(api.card_info);
    },
    addCard(data){
        console.log(data);
        // add card info
    }
}