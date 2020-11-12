import { clusterFromString } from "../logic/clusterFromString"
import { CLUSTER } from '../reducers-actions/action-types'

type clusterAction = {
  type: string
  cluster: number[][]
}

// Methuselahs
export const rPentomino: string = `.OO
OO.
.O.`
export const rPentominoCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(rPentomino, xy),
})

export const acorn: string = `.O.....
...O...
OO..OOO`
export const acornCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(acorn, xy),
})

export const rabbits: string = `O...OOO
OOO..O.
.O.....`
export const rabbitsCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(rabbits, xy),
})

export const blom: string = `O..........O
.OOOO......O
..OO.......O
..........O.
........O.O.`
export const blomCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(blom, xy),
})

export const iwona: string = `..............OOO...
....................
....................
....................
....................
....................
..O.................
...OO...............
...O..............O.
..................O.
..................O.
...................O
..................OO
.......OO...........
........O...........
....................
....................
....................
....................
OO..................
.O..................`
export const iwonaCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(iwona, xy),
})

const justyna: string = `.................O....
................O..O..
.................OOO..
.................O..O.
......................
OO................O...
.O................O...
..................O...
......................
......................
......................
......................
......................
......................
......................
...................OOO
...........OOO........`
export const justynaCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(justyna, xy),
})

const lidka: string = `..........OOO..
..........O....
..........O...O
...........O..O
............OOO
...............
.O.............
O.O............
.O.............`
export const lidkaCluster = (xy: number[]): clusterAction => ({
  type: CLUSTER,
  cluster: clusterFromString(lidka, xy),
})

export const methuselah = {
  "r-pentomino": rPentomino,
  rabbits,
  acorn,
  blom,
  iwona,
  lidka,
}
