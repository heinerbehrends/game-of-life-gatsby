import { clusterFromString } from "../logic/clusterFromString"
import { CLUSTER } from '../reducers-actions/action-types'

type clusterAction = {
  type: string
  cluster: number[][]
}

// Still Lives
export const block: string = `OO
OO`
export const blockCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(block, xy),
})

export const beehive: string = `.OO.
O..O
.OO.`
export const beehiveCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(beehive, xy),
})

export const tub: string = `.O.
O.O
.O.`
export const tubCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(tub, xy),
})

export const boat: string = `OO.
O.O
.O.`
export const boatCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(boat, xy),
})

export const fishhook: string = `OO..
O...
.OOO
...O`
export const fishhookCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(fishhook, xy),
})

export const eater2: string = `OO.O...
OO.OOO.
......O
OO.OOO.
.O.O...
.O.O...
..O....`
export const eater2Cluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(eater2, xy),
})

export const stillLives = {
  block,
  beehive,
  tub,
  boat,
  fishhook,
  eater2,
}