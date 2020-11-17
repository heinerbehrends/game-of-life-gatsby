import { CELLSIZE, MATRIX, PATTERN, RESET } from "./action-types"
import { cellSizeAction } from './cellSizeReducer'

export const createMatrixAction = matrix => ({
  type: MATRIX,
  matrix,
})

export const createPatternAction = pattern => ({
  type: PATTERN,
  pattern,
})

export const createCellSizeAction = (cellSize: number): cellSizeAction => ({
  type: CELLSIZE,
  cellSize,
})

export const createResetAction = () => ({
  type: RESET
})