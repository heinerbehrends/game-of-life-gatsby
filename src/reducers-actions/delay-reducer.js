import { DELAY } from "./action-types"

export function delayReducer(state = 200, action) {
  switch (action.type) {
    case DELAY:
      return action.delay
    default:
      return state
  }
}
