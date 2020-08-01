import Vue from "vue"
import app from "./app.vue"
import "./main.css"
let App = new Vue({
    el:".app",
    render:h=>h(app)
})