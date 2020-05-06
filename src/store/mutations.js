export default{
    addTags(state,path){
        state.routers.push(path)
        
    },

    addSliderMenu(state,payload){
        state.silderMenu=payload
    },
    addTag(state,payload){
        state.tagsList=payload
    }
}