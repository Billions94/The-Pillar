import * as RB from 'react-bootstrap'
import { useState, useEffect } from 'react'
import './styles.scss'

export default function Form() {

    const initialState = {
        name: '',
        description: '',
        image: '',
        price: '',
        category: ''
    }

    const [product, updateProduct] = useState(initialState)

    function updateInput(key: string, value: string) {
        updateProduct({...product, [key]: value })
    }

  return (
    <RB.Form>
        <RB.FormGroup>
            <RB.FormControl
            value=''
            type='text'
            onChange={(e) => updateInput('name', e.target.value)} 
            placeholder='name' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            value=''
            type='text'
            onChange={(e) => updateInput('description', e.target.value)} 
            placeholder='description' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            value=''
            type='text'
            onChange={(e) => updateInput('image', e.target.value)} 
            placeholder='image' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            value=''
            type='number'
            onChange={(e) => updateInput('price', e.target.value)} 
            placeholder='price' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            value=''
            type='text'
            onChange={(e) => updateInput('category', e.target.value)} 
            placeholder='category' />
        </RB.FormGroup>

    </RB.Form>
  )
}
