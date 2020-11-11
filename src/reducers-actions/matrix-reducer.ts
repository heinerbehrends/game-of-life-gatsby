import { produce } from "immer"
import { CELL, CLUSTER, MATRIX } from "./action-types"
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
function makeCellAlive(state, xy, draft) {
  draft[xy[1]][xy[0]] = true
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
        cluster.forEach(xy => {
          makeCellAlive(state, xy, draft)
        })
        break
      default:
        return state
    }
  })
