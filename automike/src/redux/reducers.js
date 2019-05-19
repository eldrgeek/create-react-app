console.log("Reducer is loaded")
if (module.hot) {
    console.log("Root Reducer is hot")
}
const rootReducer = (state = {counter:0,message:'none'}, action) => {
  console.log("reduced",state);
  const increment = 10 ;
  let newObj = Object.assign({},state)
  switch (action.type) {
    case 'INCREMENT':
      newObj.counter += increment;
      return newObj;
    case 'DECREMENT':
      newObj.counter -= increment;
      return newObj;
    case 'MESSAGE':
     newObj.message = action.text;
     return newObj;
    default:
      return state
  }
}




export default rootReducer;