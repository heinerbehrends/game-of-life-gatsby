import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

// const Button = styled.button`
//   position: absolute;
//   padding: 0.5rem;
//   font-size: 16px;
// `
const Input = styled.input`
  padding: 0.5rem;
`
const Container = styled.menu`
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

function Options(props) {
  const dispatch = useDispatch()
  return (
    <Container>
      <Input
        placeholder={"frames per second"}
        onChange={event => {
          dispatch({ type: "DELAY", delay: 600 / event.target.value })
        }}
      />
    </Container>
  )
}

export default Options
