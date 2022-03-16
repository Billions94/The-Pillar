import { useState, useEffect } from 'react'
import * as RB from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { productState } from '../atoms'
import './styles.scss'

export default function Home() {

  const product = useRecoilValue(productState)

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
