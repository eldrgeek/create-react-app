import { createStore } from 'redux'

import rootReducer from './reducers'
console.log("ConfigureStore is loaded");

// import { configureStore } from 'redux-starter-kit'

// import rootReducer from './reducers'

// const store = configureStore({ reducer: rootReducer })
if (module.hot) {
    console.log("configureStore is hot")
}
const configureStore = (initialStore) => {
  console.log("New store init ")
  if(initialStore) {
    initialStore.message = "reloaded on or about " + Date()
  }
  const store = createStore(rootReducer,initialStore)
  //store.dispatch({type:'MESSAGE',text:'configured'})
  console.log("Configure calledeeee")
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        console.log("New reducers in configureStore")

        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore