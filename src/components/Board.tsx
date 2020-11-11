import React from "react"
import Row from "./Row"

function Board({ matrix }) {
  return matrix.map((row, index) => (
    <Row rowList={row} key={index} rowKey={index} />
  ))
}
export default React.memo(Board)
