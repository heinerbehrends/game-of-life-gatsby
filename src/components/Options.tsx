import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { createResetAction } from "../reducers-actions/action-creators"
import PatternButtons from "./PatternButtons"
import Slider from "./Slider"
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
  const [sliderValue, setSliderValue] = useState("4")
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div style={{ position: "fixed", width: "100%", zIndex: 1, top: 0 }}>
        <OptionsContainer>
          <InputStyled style={{ display: "flex" }}>
            <label htmlFor="speed">Speed</label>
            <Slider
              onInput={event => {
                dispatch({
                  type: "DELAY",
                  delay:
                    600 / event.target.value === Infinity
                      ? null
                      : 600 / event.target.value,
                })
              }}
              onChange={event => {
                setSliderValue(event.target.value)
              }}
              value={sliderValue}
            />
          </InputStyled>
          <StartStopButton />
          <OptionsButton onClick={() => setOpen(!isOpen)}>
            {"Patterns  v"}
          </OptionsButton>
          <OptionsButton onClick={() => dispatch(createResetAction())}>
            Reset
          </OptionsButton>
        </OptionsContainer>
      </div>
      <PatternButtons isOpen={isOpen} />
    </>
  )
}

export default Options
