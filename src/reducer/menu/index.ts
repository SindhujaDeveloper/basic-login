import { createSlice } from '@reduxjs/toolkit'
import { type IActionWithPayload } from 'types'
import type { IMenuItem, IMenuReducer } from 'types/menu'

import methuVada from '../../assets/images/methu_vada.jpeg'
import masalVada from '../../assets/images/masal_vada.jpeg'
import cauliflowerChilly from '../../assets/images/cauliflower_chilly.jpeg'
import masalPonda from '../../assets/images/masal_ponda.jpeg'

const initialState: IMenuReducer = {
  menuList: [
    { name: 'Methu Vada', count: 0, img: methuVada, price: 'Rs.5 per item' },
    { name: 'Masal Vada', count: 0, img: masalVada, price: 'Rs.5 per item' },
    { name: 'Masal Ponda', count: 0, img: masalPonda, price: 'Rs.5 per item' },
    { name: 'Cauliflower Chilly', count: 0, img: cauliflowerChilly, price: 'Rs.30 - 100g' }
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
