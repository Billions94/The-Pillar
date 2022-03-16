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
    <>
    <h1 className="text-center mt-5">Suck my balls 🥜</h1>
      {product.map((item, idx) => (
        <div key={idx} className=''>
          <h6>{item.name}</h6>
          <h6>{item.description}</h6>
          <h6>{item.price}</h6>
          <h6>{item.category}</h6>
          <RB.Image src={item.image} alt='' width='100%' />
        </div>
      ))}
    </>
  )
}
