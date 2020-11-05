import { CLUSTER } from "../reducers-actions/action-types"
import { MATRIX } from "../reducers-actions/action-types"

export const longEvolveCluster = ([y, x]) => ({
  type: CLUSTER,
  cluster: [
    [y, x],
    [y - 1, x],
    [y - 1, x - 1],
    [y - 2, x],
    [y - 2, x + 1],
  ],
})
export const matrixAction = matrix => ({
  type: MATRIX,
  matrix,
})
