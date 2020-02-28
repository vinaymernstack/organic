const initialstate = {
    selectedItems : [],
    coupan:"",
    productlist:'',
}

const reduser = (state = initialstate,action) => {
   if (action.type === "addcart"){
       let count = 1 
       action.val.no_items = 1
        state.selectedItems.map((data)=>{
            if(data.name === action.val.name){
             count++
            }
        })

        if(count === 1){
            return{
                ...state,
                selectedItems : state.selectedItems.concat(action.val)
            }
        }
       
   }
   if (action.type === "deletItem"){
       let newarrey = [...state.selectedItems]
       newarrey.splice(action.val,1)
       return {
        ...state,
        selectedItems: newarrey
       }
   }

   if(action.type === "onChange"){
       let newarrey = [...state.selectedItems]
       newarrey[action.index].no_items = action.val
       return{
           ...state,
           selectedItems:newarrey
       }
   }
   if(action.type === "coupan"){
       return{
           ...state,
            coupan:action.val
       }
   }
   if(action.type==="productlist"){
       return{
           ...state,
           productlist: action.val
       }
   }
   if(action.type==="searchitem"){
    return{
        ...state,
        productlist: action.val
    }
}
       
       return state
    }
    
    


 export default reduser;