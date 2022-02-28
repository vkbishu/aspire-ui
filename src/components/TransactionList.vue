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

<style lang="scss" scoped>
.txn-type {
    font-size: 0.85rem;
    color: #325BAF;
}
.business-icon{
    display: inline-block;
    width: 24px;
    height: 20px;
    background-color: #325BAF;
    border-radius: 15px;
    margin-right: 8px;
    img {
        position: relative;
        left: 7px;
       
    }
}

.txn-list {
    padding: 0;
    margin: 0;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    li {
        border-bottom: 1px solid #F5F5F5;
        padding-bottom: 1rem;
        &:last-child {
            border-bottom: 0;
        }
    }
    .icon {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #009DFF1A;
        margin-right: 1rem;
        &.flight {
            background-image: url('~@/assets/icons/flights.svg');
            background-repeat: no-repeat;
            background-position: center;
            background-color: #00D6B51A;
        }
        &.file-storage {
            background-image: url('~@/assets/icons/file-storage-1.svg');
            background-repeat: no-repeat;
            background-position: center;
        }
        &.megaphone {
            background-image: url('~@/assets/icons/megaphone.svg');
            background-repeat: no-repeat;
            background-position: center;
            background-color: #F251951A;
        }
    }

    .txn-info {
        flex-grow: 1;
        .date {
            color: #AAAAAA;
            font-size: 0.95rem;
            margin-top: 0.2rem;
        }
    }
}
</style>