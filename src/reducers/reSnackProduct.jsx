import * as types from '../constants/ActionTypes'
let initialState=  false;
let reSnackProduct =(state=initialState,action)=>{
    switch (action.type) {
        case types.OPEN_SNACKBAR:
            return true
        case types.OPEN_SNACKBAR_CLOSE:   /// lỡ dại đặt tên  ^_^ 
            return false
        default: return state
    }
}
export default reSnackProduct