import React from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { DELAY } from "../reducers-actions/action-types"
import { InputStyled } from "./Options"

// default state is set in store.js
function StartStopButton() {
  const delay = useSelector(state => state.delayReducer)
  const dispatch = useDispatch()
  function setDelay(delay) {
    dispatch({ type: DELAY, delay })
  }
  return (
    <InputStyled
      as="button"
      onClick={() => {
        delay ? setDelay(null) : setDelay(200)
      }}
    >
      {delay ? "Stop" : "Start"}
    </InputStyled>
  )
}

export default StartStopButton
