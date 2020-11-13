import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { patternAction } from "../reducers-actions/action-creators"
import { methuselah } from "../patterns/methuselahs"
import { stillLives } from "../patterns/stillLives"
import { oscillators } from "../patterns/oscillators"
import { spaceships } from "../patterns/spaceships"

const getPattern = state => state.patternReducer

type patternButtonColumnProps = {
  patterns: string[]
  title: string
}

const PatternButtonContainer = styled.section`
  margin-top: 40px;
  padding: 8px;
  background-color: #fff;
  opacity: 90%;
  display: inline-block;
`
type patternButtonProps = {
  isActive: boolean
}
const PatternButton = styled.button<patternButtonProps>`
  padding: 8px 4px;
  border: 2px solid transparent;
  margin: 1px;
  background-color: ${props => (props.isActive ? "#eee" : "#ccc")};
`
const PatternHeader = styled.h4`
  font-size: 16px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  padding: 1px 6px;
  margin: 16px 8px;
`
const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  button:first-of-type {
    border-radius: 8px 8px 0px 0px;
  }
  button:last-of-type {
    border-radius: 0px 0px 8px 8px;
  }
`

function PatternButtonColumn({ title, patterns }: patternButtonColumnProps) {
  const currentPattern = useSelector(getPattern)
  const dispatch = useDispatch()
  function setPattern(pattern) {
    dispatch(patternAction(pattern))
  }
  return (
    <PatternButtonContainer>
      <PatternHeader>
        <h3>{title}</h3>
      </PatternHeader>
      <ButtonColumn>
        {patterns.map(pattern => (
          <PatternButton
            isActive={currentPattern === pattern}
            onClick={() => setPattern(pattern)}
          >
            {pattern}
          </PatternButton>
        ))}
      </ButtonColumn>
    </PatternButtonContainer>
  )
}

type patternMenuContainerProps = {
  isOpen: boolean
}

const PatternMenuContainer = styled.div<patternMenuContainerProps>`
  position: absolute;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: opacity 1s;
  transition: display 0s linear 1s;
  display: ${props => (props.isOpen ? "inline-block" : "none")};
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
