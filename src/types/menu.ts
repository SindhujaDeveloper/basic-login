export interface IMenuItem {
  name: string
  count: number
  img: string
}

export interface IMenuReducer {
  menuList: IMenuItem[]
}