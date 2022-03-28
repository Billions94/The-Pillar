import React from 'react';
import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../graphql/queries'
import { darkModeState, Product } from '../atoms'
import { useRecoilValue } from 'recoil'
import Carousel from './carousel/Carousel'

export default function ProductInfo() {

    const { id } = useParams()
    const [product, updateProduct] = useState<Product>({})
    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    async function getProductById() {
        try {
            const { data }: any = await API.graphql(graphqlOperation(getProduct, { id: id }))
            const item = data.getProduct
            updateProduct(item)
        } catch (error) {
            console.log('Error getting product from DB', error)
        }
    }

    useEffect(() => {
        getProductById()
    }, [])

    return (
        <>
            <section id='product'>
                <RB.Row id={check ? 'product' : 'productDark'} className='p-4'>
                    <RB.Col className='product-info' md={10} lg={10}>
                        <div className='card-container'>
                            <h1 className='title mb-2'>{product.name}</h1>
                            <RB.Image src={product.image} alt='' className='img'/>
                            {/* <Carousel image={product.image} /> */}
                        </div>
                    </RB.Col>
                </RB.Row>

            </section>

            <section>

            </section>
        </>
    )
}
