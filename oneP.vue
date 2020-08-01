<template>
 <div class="p-sub-one">
        <div class="food">
            <div class="food-one">
                <h2>饮料</h2>
                <ul class="food-ul">
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/coco.jpg" alt="">
                            <p>可口可乐7(元)</p>
                            <a class="btn" @click="add(0)">点击添加</a>
                        </div>
                    </li>
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/spirit.jpeg" alt="">
                            <p>雪碧7(元)</p>
                            <a class="btn" @click="add(1)">点击添加</a>
                        </div>
                    </li>
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/fenda.jpg" alt="">
                            <p>芬达7(元)</p>
                            <a class="btn" @click="add(2)">点击添加</a>
                        </div>
                    </li>
                </ul>
                
            </div>
            <div class="food-two">
                <h2>主食</h2> 
                <ul class="food-ul">
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/hamburger.jpeg" alt="">
                            <p>蒜香鸡腿堡18(元)</p>
                            <a class="btn" @click="add(3)">点击添加</a>
                        </div>
                    </li>
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/aoerliangham.jpg" alt="">
                            <p>奥尔良鸡腿堡15(元)</p>
                            <a class="btn" @click="add(4)">点击添加</a>
                        </div>
                    </li>
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/jituiham.jpeg" alt="">
                            <p>鸡腿堡10(元)</p>
                            <a class="btn" @click="add(5)">点击添加</a>
                        </div>
                    </li>
                </ul>   
            </div>
            <div class="food-three">
                <h2>小食</h2>   
                <ul class="food-ul">
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/shutiaoL.jpg" alt="">
                            <p>大薯16(元)</p>
                            <a class="btn" @click="add(6)">点击添加</a>
                        </div>
                    </li>
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/shutiaoM.jpg" alt="">
                            <p>中薯10(元)</p>
                            <a class="btn" @click="add(7)">点击添加</a>
                        </div>
                    </li>
                    <li class="food-li">
                        <div href="" class="food-a">
                            <img src="./images/shutiaoS.jpeg" alt="">
                            <p>小薯6(元)</p>
                            <a class="btn" @click="add(8)">点击添加</a>
                        </div>
                    </li>
                </ul>  
            </div>        
        </div>
    </div>
</template>

<script>
import store from "./store.js"

export default{
    methods:
{
    add(n)
    {
        this.$store.commit("add",n)
    } 
}
};




</script>