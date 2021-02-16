import React, { useState } from "react"
import { InputStyled } from "./Options"
import Slider from "./Slider"

type SpeedSliderProps = {
  dispatch: Function
}

export default function SpeedSlider({ dispatch }: SpeedSliderProps) {
  const [speedValue, setSpeedValue] = useState("4")
  return (
    <>
      <InputStyled
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <label htmlFor="speed">Speed</label>
        <Slider
          name={"speed"}
          min={0}
          max={8}
          step={0.5}
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
            setSpeedValue(event.target.value)
          }}
          value={speedValue}
        />
      </InputStyled>
    </>
  )
}
