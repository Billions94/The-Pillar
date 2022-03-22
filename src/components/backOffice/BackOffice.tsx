import { useState } from 'react'
import * as RB from 'react-bootstrap'
import Form from './Form'
import './styles.scss'

export default function BackOffice() {

  const [newProd, setNewProd] = useState(false)
  const [editProd, setEditProd] = useState(false)

  return (
    <RB.Row id='bo-container'>
      <h2 className='t-BO mb-5'>BackOffice</h2>
      <div>
        <div>
          <RB.Card>
            <RB.Card.Header>
              <RB.Image src={'c'} alt='' />
            </RB.Card.Header>
            <RB.Card.Body>

            </RB.Card.Body>
          </RB.Card>
        </div>
      </div>
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
