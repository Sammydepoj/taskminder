<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: localStorage.getItem("theme") },
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
=======
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: localStorage.getItem("theme") },
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
  },
})

export const { setTheme } = themeSlice.actions
>>>>>>> f5caa89ee2da2e1f70c3298f1c68c44c2323ae77
export const themeReducer = themeSlice.reducer