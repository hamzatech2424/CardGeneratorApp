import { createStore,applyMiddleware } from "redux"
// import thunk from "redux-thunk"


import rootReducer from "../Redux/Reducer/index"


const store = createStore(rootReducer)




export default store