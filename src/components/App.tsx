import React, { useCallback, useEffect, useMemo } from "react"
import Board from "./Board"
import Options from "./Options"
import { useDispatch, useSelector } from "react-redux"
import useInterval from "../logic/useInterval"
import nextGen from "../logic/nextGen"
import { matrixAction } from "../reducers-actions/action-creators"
import { drawInitialMatrix } from "../reducers-actions/matrix-reducer"
import "./App.css"
import arraysAreEqual from "../logic/arraysAreEqual"
import ClassicSpinner from "./Spinnner"

const getMatrix = state => state.matrixReducer
const getDelay = state => state.delayReducer

function App() {
  // setup state and dispatch
  const dispatch = useDispatch()
  const matrix = useSelector(getMatrix)
  // setup matrix width to fill the viewport
  useEffect((): void => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )

    const initialMatrix = drawInitialMatrix(
      Math.floor(vh / 8),
      Math.floor(vw / 8)
    )
    dispatch(matrixAction(initialMatrix))
  }, [])
  const setMatrix = useCallback(matrix => dispatch(matrixAction(matrix)), [
    matrix,
  ])
  const delay = useSelector(getDelay)
  // setup simulation

  useInterval(() => {
    const next = nextGen(matrix)
    console.log()
    if (!arraysAreEqual(matrix, next)) {
      setMatrix(nextGen(matrix))
    }
  }, delay)

  return (
    <>
      <Options />
      {matrix ? <Board matrix={matrix} /> : <ClassicSpinner />}
    </>
  )
}

export default App
