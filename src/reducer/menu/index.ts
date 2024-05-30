import { createSlice } from '@reduxjs/toolkit'
import { type IActionWithPayload } from 'types'

const initialState: any = {
  menuList: [
    { name: 'tata', count: 0 },
    { name: 'example1', count: 0 }
  ]
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuCount: (state, action: IActionWithPayload<{ name: string, count: number }>) => {
      const menuItem: { name: string, count: number } = state.menuList.find((item: { name: string, count: number }) => item.name === action.payload.name)
      if (menuItem.name !== '') {
        menuItem.count = action.payload.count
      }
    }
  }
})

export const {
  setMenuCount
} = menuSlice.actions

export const menuReducer = menuSlice.reducer
