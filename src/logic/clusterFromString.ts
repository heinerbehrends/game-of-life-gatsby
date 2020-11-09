function getXValues(clusterString: string) {
  return Array.from(clusterString).reduce((acc: number[], curr: string, idx: number) => {
    if (curr === "O") {
      acc.push(idx)
    }
    return acc
  }, [])
}
function getYValues(arr, yValue) {
  return arr.map(xValue => [xValue, yValue])
}
function addXY([x, y]: number[], arrayOfXYs) {
  return arrayOfXYs.map(([x2, y2]) => [x + x2, y + y2])
}

export const rPentominoString = `.............OO
............O.O
...........O...
..........O....
.........O.....
........O......
.......O.......
......O........
.....O.........
....O..........
...O...........
..O............
OO.............`
console.log(rPentominoString.split(/\n/))

export const clusterFromString = (clusterString: string) => (xy: number[]) => {
  const cluster = clusterString.split(/\n/).map(getXValues).map(getYValues).flat()
  return addXY(xy, cluster)
}

