import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { patternAction } from "../reducers-actions/action-creators"
import { methuselah } from "../patterns/methuselahs"
import { stillLives } from "../patterns/stillLives"
import { oscillators } from "../patterns/oscillators"
import { spaceships } from "../patterns/spaceships"

type patternButtonColumnProps = {
  patterns: string[]
  title: string
}

const PatternButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const PatternHeader = styled.h4`
  font-size: 13.333px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  padding: 1px 6px;
  margin: 16px 8px;
`

function PatternButtonColumn({ title, patterns }: patternButtonColumnProps) {
  const dispatch = useDispatch()
  function setPattern(pattern) {
    dispatch(patternAction(pattern))
  }
  return (
    <PatternButtonContainer>
      <PatternHeader>
        <h3>{title}</h3>
      </PatternHeader>
      {patterns.map(pattern => (
        <button onClick={() => setPattern(pattern)}>{pattern}</button>
      ))}
    </PatternButtonContainer>
  )
}

type patternMenuContainerProps = {
  isOpen: boolean
}

const PatternMenuContainer = styled.div<patternMenuContainerProps>`
  max-height: ${props => (props.isOpen ? "100vh" : "0")};
  transition: max-height 1s;
  display: flex;
`

export default function PatternButtons({ isOpen }) {
  return (
    <PatternMenuContainer isOpen={isOpen}>
      <PatternButtonColumn
        title="Methuselah"
        patterns={Object.keys(methuselah)}
      />
      <PatternButtonColumn
        title="Still lives"
        patterns={Object.keys(stillLives)}
      />
      <PatternButtonColumn
        title="Oscillators"
        patterns={Object.keys(oscillators)}
      />
      <PatternButtonColumn
        title="Spaceships"
        patterns={Object.keys(spaceships)}
      />
    </PatternMenuContainer>
  )
}
