import { clusterFromString } from "../logic/clusterFromString"
import { CLUSTER } from '../reducers-actions/action-types'

type clusterAction = {
  type: string
  cluster: number[][]
}

export const blinker: string = `OOO`
export const blinkerCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(blinker, xy),
})

export const star: string = `.....O.....
....OOO....
..OOO.OOO..
..O.....O..
.OO.....OO.
OO.......OO
.OO.....OO.
..O.....O..
..OOO.OOO..
....OOO....
.....O.....`
export const starCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(star, xy),
})

export const octagon: string = `...OO...
..O..O..
.O....O.
O......O
O......O
.O....O.
..O..O..
...OO...`
export const octagonCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(octagon, xy),
})

export const koksGalaxy: string = `OOOOOO.OO
OOOOOO.OO
.......OO
OO.....OO
OO.....OO
OO.....OO
OO.......
OO.OOOOOO
OO.OOOOOO`
export const koksGalaxyCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(koksGalaxy, xy),
})

export const pentadecathlon: string = `..O....O..
OO.OOOO.OO
..O....O..`
export const pentadecathlonCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(pentadecathlon, xy),
})

export const figure8: string = `OOO...
OOO...
OOO...
...OOO
...OOO
...OOO`
export const figure8Cluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(figure8, xy),
})

export const oscillators = {
  blinker,
  star,
  octagon,
  koksGalaxy,
  pentadecathlon,
  figure8
}