import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import logo from '../../assets/images/logo192.png'

import 'assets/stylesheets/menu.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuCount } from 'reducer'

export const MenuList: React.FC = () => {
  const dispatch = useDispatch()
  const menuList = useSelector((state: any) => state.menu.menuList)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    dispatch(setMenuCount({ name: e.target.name, count: Number(e.target.value) }))
  }

  const handleClick = (method: string, name: string, count: number): any => {
    // const countValue = menuList?.find((it: { name: string }) => it.name === name)?.count
    // dispatch(setMenuCount({ name, count: method === 'add' ? countValue + 1 : countValue > 10 ? countValue - 1 : countValue }))
    console.log("count",count)
    dispatch(setMenuCount({ name, count: count }))
  }

  return (
    <div className='container menu-container'>
      <h1 className='menu-title'>Menu</h1>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              header-1
            </Card.Header>
            <Card.Body>
              <img src={logo} />
            </Card.Body>
            <Card.Footer>
              <Button>Add to cart</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              header-1
            </Card.Header>
            <Card.Body>
              <img src={logo} />
            </Card.Body>
            <Card.Footer>
              <Button>Add to cart</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              header-1
            </Card.Header>
            <Card.Body>
              <img src={logo} />
            </Card.Body>
            <Card.Footer>
              <Button>Add to cart</Button>
            </Card.Footer>
          </Card>
        </Col>
        {/* <Col>
          <Card>
            <Card.Header>
              header-1
            </Card.Header>
            <Card.Body>
              <img src={logo} />
            </Card.Body>
            <Card.Footer>
              {menuList?.find((it: { name: string }) => it.name === 'tata')?.count < 1
                ? <Button onClick={() => handleClick("add", "tata")}>Add to cart</Button>
                : <>
                  <Button className='remove-btn' onClick={() => handleClick("remove", 'tata')}>-</Button>
                  <Button
                    variant='secondary'
                    className='count-btn'
                  >
                    <input
                      className='count-btn-input'
                      type='number'
                      name='tata'
                      value={menuList?.find((it: { name: string }) => it.name === 'tata')?.count}
                      onChange={handleChange}
                    />
                  </Button>
                  <Button className='add-btn' onClick={() => handleClick('add', 'tata')}>+</Button>
                </>
              }
            </Card.Footer>
          </Card>
        </Col> */}
        {
          menuList.map((it: { name: string, count: number }, index: number) => {
            return (
              <Col key={`${it.name}-${index}`}>
                <Card>
                  <Card.Header>
                    header-1
                  </Card.Header>
                  <Card.Body>
                    <img src={logo} />
                  </Card.Body>
                  <Card.Footer>
                    {it?.count < 1
                      ? <Button onClick={() => handleClick('add', it.name, it.count + 10)}>Add to cart</Button>
                      : <>
                        <Button className='remove-btn' onClick={() => handleClick('remove', it.name, it.count - 1)}>-</Button>
                        <Button
                          variant='secondary'
                          className='count-btn'
                        >
                          <input
                            className='count-btn-input'
                            type='number'
                            name={it.name}
                            value={it.count}
                            onChange={handleChange}
                          />
                        </Button>
                        <Button className='add-btn' onClick={() => handleClick('add', it.name, it.count + 1)}>+</Button>
                      </>
                    }
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
