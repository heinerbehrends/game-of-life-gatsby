import { createStore } from "redux"
import { combineReducers } from "redux"
import { matrixReducer } from "./matrix-reducer"
import { delayReducer } from "./delay-reducer"
import { patternReducer } from "./pattern-reducer"
import { cellSizeReducer } from "./cellSizeReducer"

const rootReducer = combineReducers({
  matrixReducer,
  delayReducer,
  patternReducer,
  cellSizeReducer,
})

const store = createStore(
  rootReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
