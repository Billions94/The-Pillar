import { useState, useEffect } from 'react'
import * as RB from 'react-bootstrap'
import Form from './Form'
import './styles.scss'

export default function BackOffice() {
  return (
    <RB.Row id='bo-container'>
      <h2 className='t-BO mb-5'>BackOffice</h2>
      <h5 className='t-addNewProd mb-3'>Add a new product to the catalogue</h5>
      <RB.Col md={6}>
        <Form />
      </RB.Col>
    </RB.Row>
  )
}
