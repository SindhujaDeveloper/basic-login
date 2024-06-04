import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuCount } from 'reducer'
import type { RootState, IMenuItem } from 'types'

import 'assets/stylesheets/menu.scss'

export const MenuList: React.FC = () => {
  const dispatch = useDispatch()
  const menuList = useSelector((state: RootState) => state.menu.menuList)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, img: string, price: string): any => {
    dispatch(setMenuCount({ name: e.target.name, count: Number(e.target.value), img, price }))
  }

  const handleClick = (name: string, count: number, img: string, price: string): any => {
    dispatch(setMenuCount({ name, count, img, price }))
  }

  console.log(menuList, "menu")
  return (
    <div className='container menu-container'>
      <h1 className='menu-title'>Menu</h1>
      <Row className='menu-row'>
        {menuList.length > 0 && menuList.map((it: IMenuItem, index: number) => {
          return (it !== null) && (
            <Col key={`${it.name}-${index}`} className='menu-col'>
              <Card>
                <Card.Header>
                  {it.name} - {it.price}
                </Card.Header>
                <Card.Body>
                  <img src={it.img} alt={`${it.name}`} height={'237px'} width={'224px'} />
                </Card.Body>
                <Card.Footer>
                  {(!it.price.split('').includes('5') ? it?.count < 1 : it?.count < 10)
                    ? (
                      <Button onClick={() => { handleClick(it.name, !it.price.split('').includes('5') ? it.count + 1 : it.count + 10, it.img, it.price) }} variant='light' className='add-to-cart'>Add to cart</Button>)
                    : (
                      <>
                        <Button className='remove-btn' onClick={() => { handleClick(it.name, it.count === 10 && it.price.split('').includes('5') ? it.count - 10 : it.count - 1, it.img, it.price) }} variant='light'>-</Button>
                        <Button variant='secondary' className='count-btn'>
                          <input
                            className='count-btn-input'
                            type='number'
                            name={it.name}
                            value={it.count}
                            onChange={(e) => { handleChange(e, it.img, it.price) }}
                          />
                        </Button>
                        <Button className='add-btn' onClick={() => { handleClick(it.name, it.count + 1, it.img, it.price) }} variant='light'>+</Button>
                      </>)}
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
