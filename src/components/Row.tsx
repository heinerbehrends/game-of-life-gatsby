import React from "react"
import arraysAreEqual from "../logic/arraysAreEqual"
import Cell from "./Cell"

function Row({ rowList, rowKey }) {
  const row = rowList.map((isAlive, index) => (
    <Cell isAlive={isAlive} key={index} y={rowKey} x={index} />
  ))
  return <section>{row}</section>
}
function areEqual(prev, next) {
  return arraysAreEqual(prev.rowList, next.rowList)
}
export default React.memo(Row, areEqual)
