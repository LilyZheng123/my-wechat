import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        
        list : [{"name":"可口可乐","price":7,"num":1},
        {"name":"雪碧", "price":7,"num":1},
        {"name":"芬达","price":7,"num":1},
        {"name":"蒜香鸡腿堡","price":18,"num":1},
        {"name":"奥尔良鸡腿堡","price":15,"num":1},
        {"name":"鸡腿堡","price":10,"num":1},
        {"name":"大薯","price":16,"num":1},
        {"name":"中薯","price":10,"num":1},
        {"name":"小薯","price":6,"num":1}],
        arr:[]
    },
    mutations:{
        add(state,n)
        {
            
            // this.arr.push(this.list[0]);
            // this.list[n].num = 1;   
            if (this.state.arr.indexOf(this.state.list[n])==-1)
            {
                this.state.arr.push(this.state.list[n]);
            } 
            
            // console.log(n);
            
            
        },
        pl3(state,n)
        {
            let that = this;
            let newP=judge(n);
            console.log(n);
           this.state.list[newP].num++;
           function judge(n)
            {
                for(let i=0;i<that.state.list.length;i++)
                {
                    if(n==that.state.list[i].name)
                    {
                        return i;
                    }
                }
            }
            
            
        },
        
        de3(state,index)
        {
            
            this.state.arr.splice(index,1);
        },
        mi3(state,obj)
        {
            let that = this;
            let newq = judge(obj.another);
            if(that.state.list[newq].num==1)
            {
                that.state.arr.splice(obj.index,1)
            }
            else
            {
                that.state.list[newq].num--
            }
            function judge(q)
            {
                for(let i=0;i<that.state.list.length;i++)
                {
                    if(obj.another==that.state.list[i].name)
                    {
                        return i;
                    }
                }
            }
        }
    }
   
})

export default store