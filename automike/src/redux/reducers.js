const rootReducer = (state = {counter:0,message:'none'}, action) => {
  console.log("reduced",state);
  const increment = 1;
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