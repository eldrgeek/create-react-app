import { createStore } from 'redux'

import rootReducer from './reducers'

// import { configureStore } from 'redux-starter-kit'

// import rootReducer from './reducers'

// const store = configureStore({ reducer: rootReducer })

const configureStore = () => {
  const store = createStore(rootReducer)

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore