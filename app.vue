<template>
    <div class="app">
        <div class="outer">
            <div class="order">
                <p class="order-title">订单栏</p>
                <div class="swipe">
                    <ul class="name-ul">
                        <li class="name-li"><a class="name-a" :class="{active:show==1}" @click="chooseOne">当前订单</a></li>
                        <li class="name-li"><a class="name-a" :class="{active:show==2}" @click="chooseTwo">挂单中</a></li>
                        <li class="name-li"><a class="name-a" :class="{active:show==3}" @click="chooseThree">已付款</a>
                        </li>
                        <li class="name-li"><a class="name-a" :class="{active:show==4}" @click="chooseFour">取消的订单</a>
                        </li>
                    </ul>
                    <component :is="name"></component>
                </div>
            </div>
            <div class="product">
                <p class="product-title">产品栏</p>
                <div class="swipe2">
                    <ul class="product-ul">
                        <li class="product-li"><a class="product-a" :class="{active:showP==1}" @click="chooseOneP">常点食品
                            </a></li>
                        <li class="product-li"><a class="product-a" :class="{active:showP==2}"
                                @click="chooseTwoP">主菜单</a></li>

                    </ul>
                    <component :is="nameP" ></component>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import one from "./one.vue";
import two from "./two.vue";
import three from "./three.vue";
import four from "./four.vue";
import oneP from "./oneP.vue";
import twoP from "./twoP.vue";
import store from "./store.js"

export default{
    components:{"oneP":oneP,"twoP":twoP,"one":one,"two":two,"three":three,"four":four},
    store:store,
    data(){
        return {
            name: "one",
            show: 1,
            nameP: "oneP",
            showP: 1
        }
        
    },
    methods:
    {
        chooseOne() {
            this.name = "one",
            this.show = 1;
        },
        chooseTwo() {
            this.name = "two",
            this.show = 2;
        },
        chooseThree() {
            this.name = "three",
            this.show = 3;
        },
        chooseFour() {
            this.name = "four",
            this.show = 4;
        },
        chooseOneP() {
            this.nameP = "oneP",
            this.showP = 1;
        },
        chooseTwoP() {
            this.nameP = "twoP",
            this.showP = 2;
        }
        
    }
}

</script>