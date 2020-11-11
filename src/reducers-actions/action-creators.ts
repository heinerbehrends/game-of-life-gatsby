import { MATRIX, CLUSTER, PATTERN } from "./action-types"
import { clusterFromString } from "../logic/clusterFromString"
import { acornString, dieHardString, rPentominoString } from "../patterns";


type clusterAction = {
  type: string
  cluster: number[][]
}
// Methuselahs
export const rPentominoCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(rPentominoString, xy),
})
export const dieHardCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(dieHardString, xy),
})
export const acornCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(acornString, xy),
})


export const matrixAction = matrix => ({
  type: MATRIX,
  matrix,
})

export const patternAction = pattern => ({
  type: PATTERN,
  pattern,
})
