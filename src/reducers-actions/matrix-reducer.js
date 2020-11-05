import { produce } from "immer"
import { CELL, CLUSTER, MATRIX } from "./action-types"

export function drawInitialMatrix(rows, columns) {
  return Array(rows)
    .fill(false)
    .map(row => Array(columns).fill(row))
}

const initialMatrix = drawInitialMatrix(10, 10)

function swapCell(state, xy, draft) {
  const cellState = state[xy[1]][xy[0]]
  draft[xy[1]][xy[0]] = !cellState
}

export const matrixReducer = (
  state = initialMatrix,
  { type, matrix, xy, cluster }
) =>
  produce(state, draft => {
    switch (type) {
      case MATRIX:
        return matrix
      case CELL:
        swapCell(state, xy, draft)
        break
      case CLUSTER:
        cluster.forEach(xy => {
          swapCell(state, xy, draft)
        })
        break
      default:
        return state
    }
  })
