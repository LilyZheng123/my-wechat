<template>
     <div class="sub-one">   
            <div class="order-title">
                
                    <div class="order-li">商品名称</div>
                    <div class="order-li">数量</div>
                    <div class="order-li">价格</div>
                    <div class="order-li">操作</div>
                
            </div>  
            <div class="other" :arr="arr" v-for="(item,index) in arr" >
                
                <div class="order-name">{{item.name}}</div>
                <div class="order-num">{{item.num}}</div>
                <div class="order-price">{{item.price}}</div>
                    <div class="caozuo">
                        <p class="dele" @click="de1(index)">删除</p>
                        <p class="minus" @click="mi1(index,item.name)">-</p>
                        <p class="plus" @click="pl1(item.name)">+</p>
                    </div>
            </div>
        </div>
</template>

<script>
import store from "./store.js"

export default {
    computed:{
        arr(){
            return store.state.arr
        }
    },
     methods:{
        pl1(a)
        {
            this.$store.commit("pl3",a)
        },
        de1(index)
        {
            this.$store.commit("de3",index)
        },
        mi1(index,b)
        {
            this.$store.commit("mi3",{
                index:index,
                another:b
            })
        }
    }
}




</script>