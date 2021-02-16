import React, { useCallback, useEffect } from "react"
import Board from "./Board"
import Options from "./Options"
import { useDispatch, useSelector } from "react-redux"
import useInterval from "../logic/useInterval"
import nextGen from "../logic/nextGen"
import { createMatrixAction } from "../reducers-actions/action-creators"
import { drawInitialMatrix } from "../reducers-actions/matrix-reducer"
import "./App.css"
import arraysAreEqual from "../logic/arraysAreEqual"
import ClassicSpinner from "./Spinnner"

const getMatrix = state => state.matrixReducer
const getDelay = state => state.delayReducer
export const getCellSize = state => state.cellSizeReducer

function useViewport() {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  )
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  )
  return { vw, vh }
}

function App() {
  // setup state and dispatch
  const dispatch = useDispatch()
  // const matrix = useSelector(getMatrix)
  // setup matrix width to fill the viewport
  const cellSize = useSelector(getCellSize)
  const topBarHeight = 40

  useEffect(() => {
    const { vw, vh } = useViewport()
    const initialMatrix = drawInitialMatrix(
      Math.floor((vh - topBarHeight) / cellSize),
      Math.floor(vw / cellSize)
    )
    dispatch(createMatrixAction(initialMatrix))
  }, []) // useViewportMatrix()
  // setup simulation
  const delay = useSelector(getDelay)
  const matrix = useSelector(getMatrix)
  const setMatrix = useCallback(
    matrix => dispatch(createMatrixAction(matrix)),
    [matrix]
  )

  useInterval(() => {
    const next = nextGen(matrix)
    if (!arraysAreEqual(matrix, next)) {
      setMatrix(nextGen(matrix))
    }
  }, delay)

  return (
    <>
      <Options />
      {matrix ? (
        <Board style={{ marginTop: topBarHeight }} matrix={matrix} />
      ) : (
        <ClassicSpinner />
      )}
    </>
  )
}

export default App
