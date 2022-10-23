import { AnyAction } from "@reduxjs/toolkit"
import { AuthProps, IAction, IAppState } from "./intefaces"
import { LOG_OUT, SIGN_IN } from "./types"

const initialState : IAppState = {
  authorize: false
}

export const appReducer = (state: IAppState = initialState, action: AnyAction) => {
  switch(action.type) {
    case LOG_OUT:
      return {...state, authorize: false} 

    case SIGN_IN:
      if(action.payload.login === 'Administrator' && action.payload.password === '12345') {
        return {...state, authorize: true}
      }
      return {...state, authorize: false}

    default: return state
  }
}