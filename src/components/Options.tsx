import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { createResetAction } from "../reducers-actions/action-creators"
import PatternMenu from "./PatternButtons"
import SpeedSlider from "./SpeedSlider"
import StartStopButton from "./StartStopButton"

export const InputStyled = styled.button`
  margin-left: 8px;
  padding: 0.4rem 1rem;
  border: 1px solid lightblue;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
`
const OptionsContainer = styled.div`
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  height: 40px;
`
type dropDownButtonProps = {
  onClick: Function
}

const OptionsButton = styled(InputStyled)<dropDownButtonProps>`
  section {
    flex-direction: column;
  }
`

function Options() {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div style={{ position: "fixed", width: "100%", zIndex: 1, top: 0 }}>
        <OptionsContainer>
          <SpeedSlider dispatch={dispatch} />
          <StartStopButton />
          <OptionsButton onClick={() => setOpen(!isOpen)}>
            {"Patterns  v"}
          </OptionsButton>
          <OptionsButton onClick={() => dispatch(createResetAction())}>
            Reset
          </OptionsButton>
        </OptionsContainer>
      </div>
      <PatternMenu isOpen={isOpen} setOpen={setOpen} />
    </>
  )
}

export default Options
