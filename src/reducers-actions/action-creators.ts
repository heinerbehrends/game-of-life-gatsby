import { MATRIX, PATTERN, RESET } from "./action-types"

export const createMatrixAction = matrix => ({
  type: MATRIX,
  matrix,
})

export const createPatternAction = pattern => ({
  type: PATTERN,
  pattern,
})

export const createResetAction = () => ({
  type: RESET
})