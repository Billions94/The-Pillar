import { useState } from 'react'
import * as RB from 'react-bootstrap'
import Form from './Form'
import Card from './Card'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import './styles.scss'

export default function BackOffice() {

  const [newProd, setNewProd] = useState(false)
  const [editProd, setEditProd] = useState(false)
  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false

  return (
    <RB.Row id='bo-container'>
      <h2 className={check ? 't-BO mb-1' : 't-BO-Dark mb-1'}>BackOffice</h2>
      <>
        { newProd || editProd === true ? null :
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
              <Form />
            </RB.Col>
          </>
        }
      </>
    </RB.Row>
  )
}
