export interface IMenuItem {
  name: string
  count: number
  img: string
  price: string
}

export interface IMenuReducer {
  menuList: IMenuItem[]
}
