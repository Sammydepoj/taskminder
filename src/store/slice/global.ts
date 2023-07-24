<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { State } from "../../models/application/state"
import { Payload } from "../../models/application/payload"

const initialState: State.AppState = {
  
}

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setGlobalState: (state, action: PayloadAction<Payload.Global>) => {
      const key: keyof State.AppState = action.payload.key
      state = {
        ...state,
        [key]: action.payload?.value,
      }
      return state
    },
    setAllGlobalState(state, action: PayloadAction<State.AppState>) {
      state = action.payload as any
      return state
    },
  },
})

export const { setAllGlobalState, setGlobalState } = globalSlice.actions

export const globalReducer = globalSlice.reducer
=======
/* eslint-disable prettier/prettier */
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { State } from "../../models/application/state"
import { Payload } from "../../models/application/payload"

const initialState: State.AppState = {
  
}

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    setGlobalState: (state, action: PayloadAction<Payload.Global>) => {
      const key: keyof State.AppState = action.payload.key
      state = {
        ...state,
        [key]: action.payload?.value,
      }
      return state
    },
    setAllGlobalState(state, action: PayloadAction<State.AppState>) {
      state = action.payload as any
      return state
    },
  },
})

export const { setAllGlobalState, setGlobalState } = globalSlice.actions

export const globalReducer = globalSlice.reducer
>>>>>>> f5caa89ee2da2e1f70c3298f1c68c44c2323ae77
