<template>
     <div class="card-wrapper">
        <div class="show-card-number ms-auto" :class="{'opacity-0': card.freeze || !isActive}"><a href="#" class="show-card-number-link">Show card number</a></div>
        <div class="debit-card" :class="{'opacity-75': card.freeze, 'bg-primary': isActive}">
            <div class="card-logo text-end">
                <img src="@/assets/icons/Logo-2.svg" alt="">
            </div>
            <div class="name"> {{card.name}}</div>
            <div class="card-number">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot-gap"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot-gap"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot-gap"></span>
                <span class="fw-semibold">{{cardNumber}}</span>
            </div>
            <div class="d-flex align-items-center" style="font-size: 13px">
                <div class="expire-date me-4 fw-500">{{card.expire | formatDate}}</div>
                <div class="expire-date fw-500 d-flex align-items-center">
                    <span>CVV:</span>
                    &nbsp; 
                    <div>
                        <span class="star">*</span>
                        <span class="star">*</span
                        ><span class="star">*</span>
                    </div>
                </div>
            </div>
            <div class="card-logo card-type text-end" style="margin-top: 4px;">
                <img src="@/assets/icons/Visa-Logo.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: "DebitCard",
    props: ['card', 'isActive'],
    computed: {
        cardNumber(){
            /* let str = '';
            for(let i=0; i<= this.card.card_number.length-4; i++){
                str += '<span class="dot"></span>';
                if(i % 4 == 0){
                    str += '<span class="dot-gap"></span>';
                }
            } */
            //str += this.card.card_number.substring(12);
            return this.card.card_number.substring(12);
        }
    },
    filters: {
        formatDate(date){
            return moment(date, 'YYYY-MM-DD').format("ddd: MM/YY");
        }
    }
}
</script>

<style lang="scss" scoped>

// debit card css
.card-wrapper {
    margin-right: 1rem;
}
.debit-card {
    width: 358px;
    height: 220px;
    max-width: 100%;
    border-radius: 12px;
    background-color: #536DFF;
    color: #fff;
    box-shadow: 0px 2px 6px #00000014;
    padding: 24px;
    
    margin-top: -10px;
    z-index: 11;

    .name {
        margin-bottom: 24px;
        font-size: 22px;
        font-weight: bold;
    }

    .card-number{
        font-weight: 600;
        .dot::after{
            content: '';
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin-right: 7px;
        }
        .dot-gap::after{
            content: '';
            display: inline-block;
            width: 20px;
        }
        .last-4-digit{
            font-weight: 500;
        }
    }
}

.star {
    display: inline-block;
    font-weight: 500;
    font-size: 26px;
    position: relative;
    top: 5px;
}

.show-card-number {
    font-size: 13px;
    background-color: #fff;
    border-radius: 6px 6px 0px 0px;
    padding: 0.5rem;
    width: 160px;
    height: 44px;
   
    a {
        text-decoration: none;

        &::before {
            content: "";
            display: inline-block;
            width: 17px;
            height: 15px;
            background-image: url("~@/assets/icons/remove_red_eye-24px.svg");
            background-repeat: no-repeat;
            background-size: 100%;
            margin-right: 7px;
            position: relative;
            top: 3px;
        }
    }
}

// pc
@media (min-width: 1200px) {
    .debit-card {
        width: 414px;
        height: 250px;
    }
}
</style>