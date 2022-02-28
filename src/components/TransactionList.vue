<template>
    <ul class="txn-list">
        <li class="d-flex mb-3" v-for="item in transactions" :key="item.id">
            <div class="icon app-icon" :class="[item.txn_for]"></div>
            <div class="txn-info">
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="name fw-semibold">{{item.name}}</span>
                        <div>
                            <span class="amount fw-bold" :class="{'text-green': item.txn_type == 'refund'}">{{item.amount | formatMoney(currency, item.txn_type)}}</span>
                            <span class="arrow-icon ms-3"><img src="@/assets/icons/next.svg" alt=""></span>
                        </div>
                    </div>
                    <div class="date mb-2">{{item.date | formatDate}}</div>
                    <div class="txn-type"> 
                        <span class="business-icon">
                            <img src="@/assets/icons/business-and-finance.svg" alt=""> 
                        </span>
                        Refund on debit card
                    </div>
            </div>
        </li>
    </ul>
</template>

<script>
import moment from "moment";
export default {
    name: "TransactionList",
    props: ['transactions'],
    computed: {
        currency(){
            return 'S$';
        }
    },
    filters: {
        formatMoney(str, currency, type){
            let prefix;
            if(type === 'refund'){
                prefix = "+";
            }else{
                prefix = "-";
            }
            return prefix+currency + ' '+str;
        },
        formatDate(str){
            return moment(str, 'YYYY-MM-DD').format('DD MMM YYYY');
        }
    },
}
</script>