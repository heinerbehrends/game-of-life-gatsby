import { clusterFromString } from "../logic/clusterFromString"
import { CLUSTER } from '../reducers-actions/action-types'

type clusterAction = {
  type: string
  cluster: number[][]
}

export const glider: string = `OOO
O..
.O.`
export const gliderCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(glider, xy),
})
export const LWSS: string = `.O..O
O....
O...O
OOOO.`
export const LWSSCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(LWSS, xy),
})

export const MWSS: string = `...O..
.O...O
O.....
O....O
OOOOO.`
export const MWSSCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(MWSS, xy),
})

export const HWSS: string = `...OO..
.O....O
O......
O.....O
OOOOOO.`
export const HWSSCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(HWSS, xy),
}) 

export const coeShip: string = `....OOOOOO
..OO.....O
OO.O.....O
....O...O.
......O...
......OO..
.....OOOO.
.....OO.OO
.......OO.`
export const coeShipCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(coeShip, xy),
}) 

export const copperhead: string = `.OOOO.
......
.O..O.
O.OO.O
O....O
......
O....O
OO..OO
OOOOOO
.O..O.
..OO..
..OO..`
export const copperheadCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(copperhead, xy),
}) 

export const spaceships = {
  glider,
  LWSS,
  MWSS,
  HWSS,
  coeShip,
  copperhead,
}