import { CELLSIZE } from "./action-types"

export type cellSizeAction = {
  type: string
  cellSize: number
}

export function cellSizeReducer(state = 16, action: cellSizeAction) {
  switch (action.type) {
    case CELLSIZE:
      return action.cellSize
    default:
      return state
  }
}
