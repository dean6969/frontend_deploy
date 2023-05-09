import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
        isShows: false,
        toShow:true
    },
    mutations:{
       savePath(state,isShows){
            state.isShows = isShows;
        },
       saveToShow(state,toShow){
            state.toShow = toShow;
        },
        //
    }
})