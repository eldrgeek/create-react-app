console.log("Reducer is loaded")
if (module.hot) {
    console.log("Root Reducer is hot")
}
let counter = 0;
const rootReducer = (
    state = {counter:0,message:'none',logs:['message1','message2']}, action) => {
  console.log("reduced",state);
  const increment = 10 ;
  let newObj = Object.assign({},state)
  switch (action.type) {
    case 'INCREMENT':
      newObj.counter += increment;
      return newObj;
    case 'LOG':
        newObj.logs.unshift(action.text + "YY")
        return newObj;
    case 'CLEAR':
        newObj.logs = [];
        return newObj
    case 'DECREMENT':
      newObj.counter -= increment;
      return newObj;
    case 'MESSAGE':
     newObj.message = action.text + "XXXX " + counter++;
     return newObj;
    default:
      return state
  }
}




export default rootReducer;