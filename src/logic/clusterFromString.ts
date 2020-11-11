import { matrixT } from "./liveNeighbours";

export const clusterFromString = (clusterString: string, xy: number[]) => {
  const cluster: number[][] = clusterString.split(/\n/).map(getXValues).map(getYValues).flat()
  return addXY(xy, cluster)
}

function getXValues(row: string): number[] {
  return Array.from(row).reduce((acc: number[], letter: string, idx: number) => {
    if (letter === "O") {
      acc.push(idx)
    }
    return acc
  }, [])
}
function getYValues(rows, yValue): number[][] {
  return rows.map(xValue => [xValue, yValue])
}
function addXY([x, y]: number[], arrayOfXYs: number[][]) {
  return arrayOfXYs.map(([x2, y2]) => [x + x2, y + y2])
}
function foldTorus([x,y]: number[], matrix: matrixT ) {
  const rowLength = matrix[0].length
  const columnLength = matrix.length
  if (x > rowLength) {
    x = x - rowLength
  } if (y > columnLength) {
    y = y - columnLength
  }
  return [x,y]
}


