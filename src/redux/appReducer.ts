import { AnyAction } from "@reduxjs/toolkit"
import { IAppState } from "./intefaces"
import { LOG_OUT, SIGN_IN } from "./types"
import { logins } from "../data/Logins"

const initialState : IAppState = {
  authorize: JSON.parse(localStorage.getItem('authorize') ?? 'false') ?? false
}

export const appReducer = (state: IAppState = initialState, action: AnyAction) => {
  switch(action.type) {
    case LOG_OUT:
      localStorage.setItem('authorize', String(false))
      return {...state, authorize: false} 

    case SIGN_IN:
      const index = logins.findIndex((elem) => {return elem.login === action.payload.login && elem.password === action.payload.password});
      if(index !== -1 && logins[index].password === action.payload.password ) {
        localStorage.setItem('authorize', String(true))
        return {...state, authorize: true}
      }
      localStorage.setItem('authorize', String(false))
      alert('Внимание! Неверные авторизационные данные, попробуйте ещё раз...')
      return {...state, authorize: false}

    default: return state
  }
}