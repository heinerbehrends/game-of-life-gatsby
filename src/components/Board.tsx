import React from "react"
import Row from "./Row"

function Board({ matrix, style }) {
  return (
    <div style={{ ...style }}>
      {matrix.map((row, index) => (
        <Row rowList={row} key={index} rowKey={index} />
      ))}
    </div>
  )
}
export default React.memo(Board)
