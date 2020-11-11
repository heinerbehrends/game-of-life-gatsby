import { DELAY } from "./action-types"

type delayAction = {
  type: string
  delay: number
}

export function delayReducer(state = null, action: delayAction) {
  switch (action.type) {
    case DELAY:
      return action.delay
    default:
      return state
  }
}
