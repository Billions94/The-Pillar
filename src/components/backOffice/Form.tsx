import * as RB from 'react-bootstrap'
import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listProducts } from '../../graphql/queries'
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

    async function createProduct () {
        try {
            const { data }: any = await API.graphql(graphqlOperation(listProducts))
        } catch (error) {
            console.log('Error creating product', error)
        }
    }

  return (
    <RB.Form id='form'>
        <RB.FormGroup>
            <RB.FormControl
            className='formControl'
            value=''
            type='text'
            onChange={(e) => updateInput('name', e.target.value)} 
            placeholder='name' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            className='formControl'
            value=''
            type='text'
            onChange={(e) => updateInput('description', e.target.value)} 
            placeholder='description' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            className='formControl'
            value=''
            type='text'
            onChange={(e) => updateInput('image', e.target.value)} 
            placeholder='image url' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            className='formControl'
            value=''
            type='number'
            onChange={(e) => updateInput('price', e.target.value)} 
            placeholder='price' />
        </RB.FormGroup>
        <RB.FormGroup>
            <RB.FormControl
            className='formControl'
            value=''
            type='text'
            onChange={(e) => updateInput('category', e.target.value)} 
            placeholder='category' />
        </RB.FormGroup>
        <RB.Button className='addProdBtn' variant='success'>
            Add product
        </RB.Button>

    </RB.Form>
  )
}
