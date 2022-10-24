import { AnyAction } from "@reduxjs/toolkit"
import { IAppState } from "./intefaces"
import { LOG_OUT, SIGN_IN } from "./types"

const initialState : IAppState = {
  authorize: JSON.parse(localStorage.getItem('authorize') ?? 'false') ?? false
}

export const appReducer = (state: IAppState = initialState, action: AnyAction) => {
  switch(action.type) {
    case LOG_OUT:
      localStorage.setItem('authorize', String(false))
      return {...state, authorize: false} 

    case SIGN_IN:
      if(action.payload.login === 'Administrator' && action.payload.password === '12345') {
        localStorage.setItem('authorize', String(true))
        return {...state, authorize: true}
      }
      localStorage.setItem('authorize', String(false))
      return {...state, authorize: false}

    default: return state
  }
}