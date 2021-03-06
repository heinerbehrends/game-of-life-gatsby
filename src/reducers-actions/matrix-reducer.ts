import { produce } from "immer"
import { CELL, CLUSTER, MATRIX, RESET } from "./action-types"
import { matrixT } from "../logic/liveNeighbours"

export function drawInitialMatrix(rows: number, columns: number): matrixT {
  return Array(rows)
    .fill(false)
    .map(row => Array(columns).fill(row))
}

function swapCell(state, xy, draft) {
  const cellState = state[xy[1]][xy[0]]
  draft[xy[1]][xy[0]] = !cellState
}
function makeCellAlive(xy, draft) {
  draft[xy[1]][xy[0]] = true
}
function getMatrixSize(state) {
  const yLength = state.length
  const xLength = state[0].length
  return { xLength, yLength }
}

export const matrixReducer = (state: matrixT = null, { type, matrix, xy, cluster }): matrixT =>
  produce(state, draft => {
    switch (type) {
      case MATRIX:
        return matrix
      case CELL:
        swapCell(state, xy, draft)
        break
      case CLUSTER:
        const { xLength, yLength } = getMatrixSize(state)
        cluster.forEach(xy => {
          // fold torus
          let [x, y] = xy
          if (x > xLength - 1) {
            x = x - xLength
          } if (y > yLength - 1) {
            y = y- yLength
          }
          makeCellAlive([x,y], draft)
        })
        break
      case RESET:
       return state.map(rows => rows.map(cell => false))
      default:
        return state
    }
  })
