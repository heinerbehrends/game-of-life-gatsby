import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { patternAction } from "../reducers-actions/action-creators"

type dropDownProps = {
  isOpen: boolean
}

const DropDownButton = styled.button<dropDownProps>`
  section {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
  }
`
export default function Dropdown() {
  const [isOpen, setOpen] = useState(true)
  const dispatch = useDispatch()
  function setPattern(pattern) {
    dispatch(patternAction(pattern))
  }
  return (
    <DropDownButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
      patterns
      <section>
        <button onClick={() => setPattern("r-pentomino")}>r-pentomino</button>
        <button onClick={() => setPattern("acorn")}>acorn</button>
        <button onClick={() => setPattern("die-hard")}>die hard</button>
      </section>
    </DropDownButton>
  )
}
