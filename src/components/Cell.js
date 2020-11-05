import React, { useCallback, memo } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { longEvolveCluster } from "../reducers-actions/action-creators"

const StyledSquare = styled.div`
  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 1px;
  background-color: ${props => (props.isAlive ? "white" : "black")};
`

function Cell({ isAlive, x, y }) {
  const dispatch = useDispatch()
  const setCluster = useCallback(() => dispatch(longEvolveCluster([x, y])), [
    dispatch,
    x,
    y,
  ])
  // const setCell = useCallback(
  //   () =>
  //     dispatch({
  //       type: CELL,
  //       xy: [x, y],
  //     }),
  //   [dispatch, x, y],
  // );

  const handleClick = () => {
    setCluster()
  }
  return <StyledSquare isAlive={isAlive} x={x} y={y} onClick={handleClick} />
}

export default memo(Cell)
