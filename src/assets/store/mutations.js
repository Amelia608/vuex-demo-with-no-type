const state={
    head:true
}

const mutations={
    HeadShow:(state)=>{
        state.head=true;
    },
    HeadHide:(state)=>{
        state.head=false;
    }
}

const getters={
    headShow(state){
        return state.head;
    }
}

export default{
    state,
    mutations,
    getters
}