import React, { useState } from 'react'
import * as RB from 'react-bootstrap'
import Form, { HistoryForm } from './Form'
import Card, { ProdCard } from './Card'
import { useRecoilState, useRecoilValue } from 'recoil'
import { darkModeState, modalState } from '../atoms'
import EditModal from './modals/EditModal'
import './styles.scss'

export default function BackOffice() {

  const [newProd, setNewProd] = useState(false)
  const [editProd, setEditProd] = useState(false)
  const [history, setHistory] = useState(false)
  const [modalShow, setModalShow] = useRecoilState(modalState)
  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false


  return (
    <RB.Row id='bo-container'>
      <h2 className={check ? 't-BO mb-1' : 't-BO-Dark mb-1'}>BackOffice</h2>
      <>
        {newProd || editProd || history === true ? null :
          <div className='card-container'>
            <Card
              newProd={newProd}
              editProd={editProd}
              setNewProd={setNewProd}
              setEditProd={setEditProd}
              history={history}
              setHistory={setHistory} />
          </div>
        }
      </>
      <>
        {newProd === false ? null :
          <>
            <div>
              <h6 onClick={() => setNewProd(false)}
                className={check ? 'dark-text' : 'light-text'}>
                ← Back
              </h6>
              <h5 className={check ? 't-addNewProd mb-3' : 't-addNewProd-Dark'}>
                Add a new product to the catalogue
              </h5>
            </div>
            <RB.Col md={6}>
              <Form />
            </RB.Col>
          </>
        }
        {editProd === false ? null :
          <>
            <div>
              <h6 onClick={() => setEditProd(false)}
                className={check ? 'dark-text' : 'light-text'}>
                ← Back
              </h6>
              <h5 className={check ? 't-addNewProd mb-3' : 't-addNewProd-Dark'}>
                Edit a product in the catalogue
              </h5>
            </div>
            <RB.Col md={6}>
              <div>
                <div className='card-container'>
                  <ProdCard
                    newProd={newProd}
                    editProd={editProd}
                    setNewProd={setNewProd}
                    setEditProd={setEditProd}
                    setModalShow={setModalShow} />
                </div>
                <EditModal
                  modalShow={modalShow}
                  setModalShow={setModalShow} />
              </div>
            </RB.Col>
          </>
        }
        {history === false ? null :
          <>
            <div>
              <h6 onClick={() => setHistory(false)}
                className={check ? 'dark-text' : 'light-text'}>
                ← Back
              </h6>
              <h5 className={check ? 't-addNewProd mb-3' : 't-addNewProd-Dark'}>
                Add a new history to the catalogue
              </h5>
            </div>
            <RB.Col md={6}>
              <HistoryForm />
            </RB.Col>
          </>}
      </>
    </RB.Row>
  )
}


