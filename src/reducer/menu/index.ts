import { createSlice } from '@reduxjs/toolkit'
import { type IActionWithPayload } from 'types'
import type { IMenuItem, IMenuReducer } from 'types/menu'

import tata from '../../assets/images/logo192.png'

const initialState: IMenuReducer = {
  menuList: [
    { name: 'tata', count: 0, img: tata },
    { name: 'example1', count: 0, img: tata },
    { name: 'example2', count: 0, img: tata },
    { name: 'example3', count: 0, img: tata },
    { name: 'example4', count: 0, img: tata },
    { name: 'example5', count: 0, img: tata },
    { name: 'example6', count: 0, img: tata },
    { name: 'example7', count: 0, img: tata },
    { name: 'example8', count: 0, img: tata },
    { name: 'example9', count: 0, img: tata }
  ]
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuCount: (state: IMenuReducer, action: IActionWithPayload<IMenuItem>) => {
      const menuItem = state.menuList.find((item: IMenuItem) => item.name === action.payload.name)
      if (menuItem) {
        menuItem.count = action.payload.count
      }
    }
  }
})

export const {
  setMenuCount
} = menuSlice.actions

export const menuReducer = menuSlice.reducer
