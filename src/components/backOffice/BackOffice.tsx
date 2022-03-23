import { useState } from 'react'
import * as RB from 'react-bootstrap'
import Form from './xForm'
import Card, { ProdCard } from './Card'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, productState, modalState } from '../atoms'
import EditModal from './EditModal'
import './styles.scss'

export default function BackOffice() {

  const [newProd, setNewProd] = useState(false)
  const [editProd, setEditProd] = useState(false)
  const [modalShow, setModalShow] = useRecoilState(modalState)
  const [products, updateProducts] = useRecoilState(productState)
  const [selected, updateSelected] = useState(0)
  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false

  const productIndex = products.findIndex((p, idx) => idx === selected)

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
            <h5 className={check ? 't-addNewProd mb-3' : 't-addNewProd-Dark'}>
              Add a new product to the catalogue
            </h5>
            <RB.Col md={6}>
              <Form />
            </RB.Col>
          </>
        }
        {editProd === false ? null :
          <>
            <h5 className={check ? 't-addNewProd mb-3' : 't-addNewProd-Dark'}>
              Edit a new product to the catalogue
            </h5>
            <RB.Col md={6}>
              <div>
                <div className='card-container'>
                  <ProdCard
                    newProd={newProd}
                    editProd={editProd}
                    setNewProd={setNewProd}
                    setEditProd={setEditProd}
                    setModalShow={setModalShow} 
                    updateSelected={updateSelected} />
                </div>
                <EditModal 
                  index={productIndex}
                  modalShow={modalShow} 
                  setModalShow={setModalShow} />
              </div>
            </RB.Col>
          </>
        }
      </>
    </RB.Row>
  )
}




{/* {products.map((item, idx) => (
                  <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
                    <RB.Card onClick={() => toggle(idx)}
                      className='card'>
                      <RB.Card.Header className='card-header'>
                        <RB.Image className='card-img' src={item.image} alt='' />
                      </RB.Card.Header>
                      <RB.Card.Body className='card-body'>
                        <h6 className='c-text'>{item.name}</h6>
                        <h6 className='c-text'>{item.description}</h6>
                        <h6 className='c-text'>{item.price}</h6>
                        <h6 className='c-text'>{item.category}</h6>
                      </RB.Card.Body>
                    </RB.Card>
                  </div>
))} */}
