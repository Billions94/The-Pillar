import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../graphql/queries'
import { darkModeState, Product } from '../atoms'
import { useRecoilValue } from 'recoil'

export default function ProductInfo() {
    const { id } = useParams()
    console.log('This is the id of the product', id)

    const [product, updateProduct] = useState<Product>({})
    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false 

    async function getProductById() {
        try {
            const { data }: any = await API.graphql(graphqlOperation(getProduct, { id: id }))
            console.log('This is the data from the product', data)
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
        <div>
            <div className={check ? 'card-holder' : 'card-holderDark'}>
                <RB.Card onClick={() => toggle(idx)}
                    className='card'>
                    <RB.Card.Header className='card-header'
                        style={{ width: '186px', height: '155px' }}>
                        <RB.Image className='card-img' src={item.image} alt='' />
                    </RB.Card.Header>
                    <RB.Card.Body className='card-body'>
                        <h6 className='card-text'>{item.name}</h6>
                        <h6 className='card-text'>{item.description}</h6>
                        <h6 className='card-text'>{item.price}</h6>
                        <h6 className='card-text'>{item.category}</h6>
                    </RB.Card.Body>
                </RB.Card>
            </div>
        </div>
    )
}
