import { useState } from 'react'
import * as RB from 'react-bootstrap'
import Form from './Form'
import Card from './Card'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, productState } from '../atoms'
import './styles.scss'

export default function BackOffice() {

  const [newProd, setNewProd] = useState(false)
  const [editProd, setEditProd] = useState(false)
  const [products, updateProducts] = useRecoilState(productState)
  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false


  function toggle(idx: number) {

  }

  return (
    <RB.Row id='bo-container'>
      <h2 className={check ? 't-BO mb-1' : 't-BO-Dark mb-1'}>BackOffice</h2>
      <>
        {newProd || editProd === true ? null :
          <div className='card-container'>
            <Card
              newProd={newProd}
              editProd={editProd}
              setNewProd={setNewProd}
              setEditProd={setEditProd} />
          </div>
        }
      </>
      <>
        {newProd === false ? null :
          <>
            <h5 className='t-addNewProd mb-3'>Add a new product to the catalogue</h5>
            <RB.Col md={6}>
              <Form />
            </RB.Col>
          </>
        }
        {editProd === false ? null :
          <>
            <h5 className='t-addNewProd mb-3'>Edit a new product to the catalogue</h5>
            <RB.Col md={6}>
              <div>
                {products.map((item, idx) => (
                  <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
                    <RB.Card onClick={() => toggle(idx)}
                      className='card'>
                      <RB.Card.Header className='card-header'>
                        <RB.Image className='card-img' src={item.image} alt='' />
                      </RB.Card.Header>
                      <RB.Card.Body>
                        <strong>{item.description}</strong>
                      </RB.Card.Body>
                    </RB.Card>
                  </div>
                ))}
              </div>
              <Form />
            </RB.Col>
          </>
        }
      </>
    </RB.Row>
  )
}
