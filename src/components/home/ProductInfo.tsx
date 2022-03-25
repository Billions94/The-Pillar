import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductInfo() {
    const { id } = useParams()
    console.log('This is the id of the product', id)
  return (
    <div>

    </div>
  )
}
