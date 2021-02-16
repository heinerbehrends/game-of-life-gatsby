import React, { useCallback, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { patternSwitch } from "../patterns/patterns"
import { cellSize } from "./App"

const StyledSquare = styled.div<cellProps>`
  width: ${({ cellSize }) => cellSize}px;
  height: ${({ cellSize }) => cellSize}px;
  display: inline-block;
  border: 1px solid darkgray;
  background-color: ${props => (props.isAlive ? "yellow" : "black")};
  box-sizing: border-box;
`

type cellProps = {
  isAlive: boolean
  x: number
  y: number
  cellSize: number
}

const patternSelector = state => state.patternReducer

function Cell({ isAlive, x, y }: cellProps): React.ReactElement {
  const dispatch: Function = useDispatch()
  const pattern: string = useSelector(patternSelector)
  const setPattern = useCallback(
    () => dispatch(patternSwitch[pattern]([x, y])),
    [x, y, pattern]
  )
  const handleClick = () => {
    setPattern()
  }
  return (
    <StyledSquare
      isAlive={isAlive}
      x={x}
      y={y}
      onClick={handleClick}
      cellSize={cellSize}
    />
  )
}

export default memo(Cell)
