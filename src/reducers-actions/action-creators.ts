import { MATRIX, PATTERN } from "./action-types"


export const matrixAction = matrix => ({
  type: MATRIX,
  matrix,
})

export const patternAction = pattern => ({
  type: PATTERN,
  pattern,
})
