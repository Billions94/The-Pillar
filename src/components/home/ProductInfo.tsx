import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../atoms'

export default function ProductInfo() {
    const { id } = useParams()
    console.log('This is the id of the product', id)

    const [product, updateProduct] = useState<Product>({})

    async function getProduct() {
        try {
            const { data }: any = await API.graphql(graphqlOperation(getProduct, { id: id }))
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
        <div>
            <h1 className="text-dark">{product.name}</h1>
        </div>
    )
}
