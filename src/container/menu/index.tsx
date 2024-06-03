import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuCount } from 'reducer'
import type { RootState, IMenuItem } from 'types'

import 'assets/stylesheets/menu.scss'

export const MenuList: React.FC = () => {
  const dispatch = useDispatch()
  const menuList = useSelector((state: RootState) => state.menu.menuList)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, img: string): any => {
    dispatch(setMenuCount({ name: e.target.name, count: Number(e.target.value), img }))
  }

  const handleClick = (name: string, count: number, img: string): any => {
    dispatch(setMenuCount({ name, count, img }))
  }

  return (
    <div className='container menu-container'>
      <h1 className='menu-title'>Menu</h1>
      <Row className='menu-row'>
        {menuList.length > 0 && menuList.map((it: IMenuItem, index: number) => {
          return (it !== null) && (
            <Col key={`${it.name}-${index}`} className='menu-col'>
              <Card>
                <Card.Header>
                  {it.name}
                </Card.Header>
                <Card.Body>
                  <img src={it.img} alt={`${it.name}`} />
                </Card.Body>
                <Card.Footer>
                  {it?.count < 10
                    ? (
                      <Button onClick={() => { handleClick(it.name, it.count + 10, it.img) }} variant='light' className='add-to-cart'>Add to cart</Button>
                      )
                    : (
                      <>
                        <Button className='remove-btn' onClick={() => { handleClick(it.name, it.count === 10 ? it.count - 10 : it.count - 1, it.img) }} variant='light'>-</Button>
                        <Button variant='secondary' className='count-btn'>
                          <input
                            className='count-btn-input'
                            type='number'
                            name={it.name}
                            value={it.count}
                            onChange={(e) => { handleChange(e, it.img) }}
                          />
                        </Button>
                        <Button className='add-btn' onClick={() => { handleClick(it.name, it.count + 1, it.img) }} variant='light'>+</Button>
                      </>
                      )}
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
