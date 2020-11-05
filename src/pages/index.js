import React from "react"
import { Provider } from "react-redux"
import store from "../reducers-actions/store"
import "./index.css"
import App from "../components/App"

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
