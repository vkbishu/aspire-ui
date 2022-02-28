<template>
    <div class="cards">
        <div class="panel-fixed-mobile">
            <div class="panel-header p-4 pb-2">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="title mb-2">Account balance</div>
                    <div class="d-md-none" style="position:relative; top: -5px"><Logo /></div>
                </div>
                
                <div class="d-flex align-items-center justify-content-between">
                    <div class="balance-amount d-flex align-items-center">
                        <div class="currency-label">{{currency}}</div>
                        <div class="balance">{{balance}}</div>
                    </div>
                    <div>
                        <a href="#" class="btn btn-sm btn-secondary add-card-btn" @click.prevent="openCardModal">New card</a>
                    </div>
                </div>
                <!-- nav -->
                <div class="pt-4 pb-3">
                    <ul class="nav-list d-flex align-items-center">
                        <li class="nav-item"><a href="#" class="active">My debit cards</a></li>
                        <li class="nav-item"><a href="#">All company cards</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="box padder">
            <div class="row mob">
                <div class="col-md-12 col-lg-6">
                    <div class="ps-4 card-carosel" v-if="cards.length > 0">
                        <!-- card carosel -->
                        <Flicking ref="flicking" 
                            @changed="checkCard"
                            :options="{ align: 'prev', circular: false }" :plugins="plugins" class="pb-5">
                                <DebitCard v-for="card of cards" :key="card.id" :card="card" :is-active="card.id == active_card.id"/>
                                <div slot="viewport" class="flicking-pagination"></div>
                        </Flicking>
                        <div  v-if="active_card" class="d-none d-md-block mt-3">
                            <div class="card-action pc text-center d-flex align-items-center justify-content-around pt-4 pb-4">
                                <div class="card-option" @click.prevent="unFreezeCard" v-if="active_card.freeze">
                                    <div class="icon">
                                        <img src="@/assets/icons/Freeze-card.svg" alt="">
                                    </div>
                                    <div class="name">Unfreeze card</div>
                                </div>
                                <div v-else class="card-option" @click.prevent="freezeCard">
                                    <div class="icon">
                                        <img src="@/assets/icons/Freeze-card.svg" alt="">
                                    </div>
                                    <div class="name">Freeze card</div>
                                </div>
                                <div class="card-option">
                                    <div class="icon">
                                        <img src="@/assets/icons/Set-spend-limit.svg" alt="">
                                    </div>
                                    <div class="name">Set spend limit</div>
                                </div>
                                <div class="card-option">
                                    <div class="icon">
                                        <img src="@/assets/icons/GPay.svg" alt="">
                                    </div>
                                    <div class="name">Add to GPay</div>
                                </div>
                                <div class="card-option">
                                    <div class="icon">
                                        <img src="@/assets/icons/Replace-card.svg" alt="">
                                    </div>
                                    <div class="name">Replace card</div>
                                </div>
                                <div class="card-option" @click.prevent="cancelCard">
                                    <div class="icon">
                                        <img src="@/assets/icons/Deactivate-card.svg" alt="">
                                    </div>
                                    <div class="name">Cancel card</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-6">
                    <div class="scroll-content-mobile" v-if="active_card">
                        <div class="d-block d-md-none">
                        <div class="card-action text-center d-flex align-items-center justify-content-around pt-4 pb-4">
                            <div class="card-option" @click.prevent="unFreezeCard" v-if="active_card.freeze">
                                <div class="icon">
                                    <img src="@/assets/icons/Freeze-card.svg" alt="">
                                </div>
                                <div class="name">Unfreeze card</div>
                            </div>
                            <div v-else class="card-option" @click.prevent="freezeCard">
                                <div class="icon">
                                    <img src="@/assets/icons/Freeze-card.svg" alt="">
                                </div>
                                <div class="name">Freeze card</div>
                            </div>
                            <div class="card-option">
                                <div class="icon">
                                    <img src="@/assets/icons/Set-spend-limit.svg" alt="">
                                </div>
                                <div class="name">Set spend limit</div>
                            </div>
                            <div class="card-option">
                                <div class="icon">
                                    <img src="@/assets/icons/GPay.svg" alt="">
                                </div>
                                <div class="name">Add to GPay</div>
                            </div>
                            <div class="card-option">
                                <div class="icon">
                                    <img src="@/assets/icons/Replace-card.svg" alt="">
                                </div>
                                <div class="name">Replace card</div>
                            </div>
                            <div class="card-option" @click.prevent="cancelCard">
                                <div class="icon">
                                    <img src="@/assets/icons/Deactivate-card.svg" alt="">
                                </div>
                                <div class="name">Cancel card</div>
                            </div>
                        </div>
                        </div>

                        <!-- accordion -->
                        <div class="p-4 card-content" v-if="active_card">
                            <vsa-list class="mb-4" :key="'card-detail-'+accordion_key">
                                <vsa-item>
                                    <vsa-heading>
                                        <img src="@/assets/icons/Group-11889.svg" alt="" style="margin-right: 12px"> Card details
                                    </vsa-heading>

                                    <vsa-icon>
                                        <span class="open">
                                            <img src="@/assets/icons/down-arrow.svg" alt="">
                                        </span>
                                        <span class="close">
                                            <img src="@/assets/icons/up-arrow.svg" alt="">
                                        </span>
                                    </vsa-icon>

                                    <vsa-content>
                                    <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio esse dolores neque magni corporis amet itaque possimus? Quaerat quam saepe vel culpa adipisci, veniam ex vitae iste at repellat numquam.</p>
                                    </vsa-content>
                                </vsa-item>
                            </vsa-list>

                            <vsa-list  :key="'recent-txn-'+accordion_key" :auto-collapse="false" :init-active="true">
                                <vsa-item>
                                    <vsa-heading>
                                    <img src="@/assets/icons/Group-11889-1.svg" alt="" style="margin-right: 12px"> Recent transactions
                                    </vsa-heading>

                                    <vsa-icon>
                                        <span class="open">
                                            <img src="@/assets/icons/down-arrow.svg" alt="">
                                        </span>
                                        <span class="close">
                                            <img src="@/assets/icons/up-arrow.svg" alt="">
                                        </span>
                                    </vsa-icon>
                                    <vsa-content class="p-0">
                                        <TransactionList :transactions="active_card.recent_transactions"/>
                                        <div class="view-all">View all card transactions</div>
                                    </vsa-content>
                                </vsa-item>
                            </vsa-list>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!--add card modal -->
        <modal name="add-card-modal" :adaptive="true" height="auto" @opened="$refs.card_name_input.focus()">
            <div>
                <div class="vue-dialog-content">
                    <div class="vue-dialog-content-title">Add new card</div> 
                    <div>
                        <input type="text" class="form-control" placeholder="Enter name here..." v-model="new_card.name" ref="card_name_input" :class="{'is-invalid': new_card.name_error}">
                        <p class="text-danger fs-13 mt-2" v-if="new_card.name_error">{{new_card.name_error}}</p>
                    </div>
                </div>
                <div class="vue-dialog-buttons">
                    <button type="button" tabindex="0" class="vue-dialog-button" style="flex: 1 1 50%;" @click.prevent="addCard">Add</button>
                    <button type="button" tabindex="0" class="vue-dialog-button" style="flex: 1 1 50%;" @click.prevent="$modal.hide('add-card-modal')">Cancel</button>
                </div>
            </div>
        </modal>

        <!-- dialog -->
        <v-dialog />
    </div>
</template>

<script>
import CardService from "@/service/card-service";
import moment from "moment";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import { Flicking } from "@egjs/vue-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import DebitCard from "@/components/DebitCard"
import TransactionList from "@/components/TransactionList"
import Logo from "@/components/Logo";
export default {
    name: "Card",
    components: {
        Flicking,
        VsaList,
        VsaItem,
        VsaHeading,
        VsaContent,
        VsaIcon,
        DebitCard,
        TransactionList,
        Logo
    },
    data(){
        return {
            // global
            balance: '',
            // global
            currency: '',

            accordion_key: Date.now(),
            plugins: [new Pagination({ type: 'bullet'})],
            active_card: null,
            new_card: {
                name: '',
                name_error: null
            },
            cards: [],
        }
    },
    created(){
        CardService.getCards()
        .then(res => {
            this.balance = res.data.data.balance;
            this.currency = res.data.data.currency;
            this.cards = res.data.data.cards;
            this.active_card = this.cards[0];
        });
    },
    methods: {
        getCurrentCard(){
            return this.$refs.flicking.index;
        },
        freezeCard(){
            this.active_card.freeze = true;
        },
        unFreezeCard(){
            this.active_card.freeze = false;
        },
        checkCard(){
            this.active_card = this.cards[this.getCurrentCard()];
            this.accordion_key++;
        },
        openCardModal(){
            this.$modal.show('add-card-modal');
        },
        addCard(){
            if(this.new_card.name.trim().length == 0){
                return false;
            }
            const name_regrex = /^[A-Za-z\s]+$/;
            if(!name_regrex.test(this.new_card.name)){
                this.new_card.name_error = 'Name should contain only alphabets and space characters';
                return false;
            }

            this.cards.push({
                id: Date.now(),
                name: this.new_card.name,
                card_number: this.generateCardNumer(16),
                expire: this.generateRandomDate(),
                freeze: false,
            });

            this.$modal.hide('add-card-modal');
            this.new_card.name = '';

            this.$toast.open({
                type: 'success',
                message: 'Card successfully added',
                position: 'top'
            });
        },
        cancelCard(){
            this.$modal.show('dialog', {
                title: 'Cancel Card',
                text: 'Are you sure to cancel this card?',
                buttons: [
                    {
                        title: 'Yes',
                        handler: () => {
                            this.cards = this.cards.filter(card => {
                                return card.id != this.active_card.id;
                            });
                            this.$modal.hide('dialog');
                            this.$toast.open({
                                type: 'success',
                                message: 'Card successfully removed',
                                position: 'top'
                            });
                        }
                    },
                    {
                        title: 'No',
                        handler: () => {
                            this.$modal.hide('dialog');
                        }
                    }
                ]
            })
        },
        generateCardNumer(length){
            let result = '';
            let characters = '0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
        generateRandomDate(){
            let start = new Date(2019, 0, 1);
            let end = new Date();
            return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).format('YYYY-MM-DD');
        }
    },
    watch: {
        'new_card.name'(val){
            const name_regrex = /^[A-Za-z\s]+$/;
            if(val && !name_regrex.test(val)){
                this.new_card.name_error = 'Name should contain only alphabets and space characters';
            }else{
                this.new_card.name_error = null;
            }
        }
    }
}
</script>

<style lang="scss">
@import '~vue-simple-accordion/dist/vue-simple-accordion.css';
@import "~@egjs/vue-flicking/dist/flicking.css";
@import "~@egjs/flicking-plugins/dist/pagination.css";
@import "@/assets/css/_variables";
@import "@/assets/css/views/card";
</style>

