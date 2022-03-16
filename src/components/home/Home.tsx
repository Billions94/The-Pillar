import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { listProducts } from '../../graphql/queries'
import { productState } from '../atoms'
import './styles.scss'

export default function Home() {

  const [product, updateProduct] = useRecoilState(productState)

  async function getProduct() {
    try {
      const { data }: any = await API.graphql(graphqlOperation(listProducts))
      const { items } = data.listProducts
      updateProduct(items)
    } catch (error) {
      console.log('Error getting product from DB', error)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <RB.Row id='home' className='p-4'>
      <h1 className="t-catalogue mb-4">Catalogue </h1>
      <RB.Col sm={10} md={3}>
        {product.map((item, idx) => (
          <RB.Card key={idx} className='productCard'>
            <RB.Image src={item.image} alt='' width='100%' />
            <RB.Card.Body>
              <h6 className='t-text'>{item.name}</h6>
              <h6 className='t-text'>{item.description}</h6>
              <h6 className='t-text'>{item.price}</h6>
              <h6 className='t-text'>{item.category}</h6>
            </RB.Card.Body>
          </RB.Card>
        ))}
      </RB.Col>
    </RB.Row>
  )
}
