import React from "react"
import Cell from "./Cell"

function propsAreEqual(prev, next) {
  return prev.rowList === next.rowList
}

function Row({ rowList, rowKey }) {
  const row = rowList.map((isAlive, index) => (
    <Cell isAlive={isAlive} key={index} y={rowKey} x={index} />
  ))
  return <section>{row}</section>
}

export default React.memo(Row, propsAreEqual)
