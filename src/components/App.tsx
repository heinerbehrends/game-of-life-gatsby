import React, { useEffect, useMemo } from "react"
import Matrix from "./Matrix"
import StartStopButton from "./StartStopButton"
import Options from "./Options"
import { useDispatch, useSelector } from "react-redux"
import useInterval from "../logic/useInterval"
import nextGen from "../logic/nextGen"
import { matrixAction } from "../reducers-actions/action-creators"
import { drawInitialMatrix } from "../reducers-actions/matrix-reducer"
import "./App.css"

function App() {
  // setup state and dispatch
  const dispatch = useDispatch()
  const matrix = useSelector(state => state.matrixReducer)
  const setMatrix = matrix => dispatch(matrixAction(matrix))
  const delay = useSelector(state => state.delayReducer)
  // setup matrix width to fill the viewport
  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )

    const initialMatrix = drawInitialMatrix(
      Math.floor(vh / 12),
      Math.floor(vw / 10.3)
    )
    dispatch(matrixAction(initialMatrix))
  }, [dispatch])
  // setup simulation
  const next = useMemo(() => nextGen(matrix), [matrix])
  useInterval(() => {
    setMatrix(next)
  }, delay)
  return (
    <>
      <Options />
      {matrix ? <Matrix matrix={matrix} /> : null}
      <StartStopButton />
    </>
  )
}

export default App
