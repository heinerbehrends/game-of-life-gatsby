import { PATTERN } from "./action-types"

type patternAction = {
  type: string
  pattern: string
}

export function patternReducer(state = 'r-pentomino', action: patternAction) {
  switch (action.type) {
    case PATTERN:
      return action.pattern
    default:
      return state
  }
}
