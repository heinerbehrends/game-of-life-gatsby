import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

const SliderStyled = styled.input`
  width: 160px;
  margin: 8px 0;
  background-color: transparent;
  -webkit-appearance: none;

  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    background: #a4a4a4;
    border: 0.2px solid #010101;
    border-radius: 8px;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }
  ::-webkit-slider-thumb {
    margin-top: -8.2px;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 17px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  :focus::-webkit-slider-runnable-track {
    background: #bebebe;
  }
  ::-moz-range-track {
    background: #a4a4a4;
    border: 0.2px solid #010101;
    border-radius: 8px;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 17px;
    cursor: pointer;
  }
  ::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 12px 0;
    color: transparent;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }
  ::-ms-fill-lower {
    background: #8b8b8b;
    border: 0.2px solid #010101;
    border-radius: 16px;
  }
  ::-ms-fill-upper {
    background: #a4a4a4;
    border: 0.2px solid #010101;
    border-radius: 16px;
  }
  ::-ms-thumb {
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 17px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  :focus::-ms-fill-lower {
    background: #a4a4a4;
  }
  :focus::-ms-fill-upper {
    background: #bebebe;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align: auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
     {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
`

export default function Slider(props) {
  const [sliderValue, setSliderValue] = useState("4")
  const dispatch = useDispatch()
  return (
    <SliderStyled
      type="range"
      name="speed"
      min="0"
      max="8"
      step="0.5"
      {...props}
    />
  )
}
