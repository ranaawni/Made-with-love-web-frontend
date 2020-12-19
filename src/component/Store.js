import { createStore } from 'redux'; 
import { combineReducers } from 'redux';



var signUpSeller = {
 email :"",
 password : "",
 storeName : "",
 category : "",
 description : "",
 location : "",
 deliveryOrder : ""
};

var signUpBuyer = {
    email:"",
    password:"",
    userName:"",
    location:"",
    phoneNumber:""
} 

var category = {
    name:""
}

var reducerBuyer = (state =signUpBuyer, action) =>{
    switch (action.type) {
        case 'INPUT_BUYER':
            var obj = {}
            obj[action.name]= action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj) 
          
    
        default:
           return state;
    }
}


var reducer = (state = signUpSeller, action) =>{
    // console.log('reducer', state);
    switch (action.type) {
        case 'INPUT_CANGE':
            //console.log("object", Object.assign( {},state, {email :action.text}, {password :action.text}, {storeName :action.text},{category :action.text},{description :action.text},{location :action.text},{deliveryOrder :action.text}))
            // var x = action.name; 
            var obj = {}
            obj[action.name]= action.text
            // console.log("objj",obj)
            return Object.assign({}, state, obj)
            
    
        default:
            return state;
    }
    
}

var catReducer = (state = category,action) => {
    console.log(action)
    switch (action.type){
        case 'food_category':
         
            // console.log("objj",obj)
            category = Object.assign({}, state, {name:'food'})
            console.log(state,'state')
            console.log('cat', category)

            return Object.assign({}, state, {name:'food'})
            
         case 'clothes_category':
            category = Object.assign({}, state, {name:'clothes'})
            console.log(state,'state')
            console.log('cat', category)

            return Object.assign({}, state, {name:'clothes'})
            case 'babyshower_category':
                category = Object.assign({}, state, {name:'baby'})
                console.log(state,'state')
                console.log('cat', category)
  
                return Object.assign({}, state, {name:'babyshower accessories'})   
            case 'accesories_category':
            category = Object.assign({}, state, {name:'accesories'})
            console.log(state,'state')
            console.log('cat', category)

            return Object.assign({}, state, {name:'accesories'})
        default:
            return state;
    }
    
}


const allReducers = combineReducers({
    reducer,
    // addItem: reducerAddItem
    reducerBuyer,
    catReducer

 })

var store = createStore(allReducers);

export default store;
