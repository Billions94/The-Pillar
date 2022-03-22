import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listProducts } from '../../graphql/queries'
import { darkModeState, productState } from '../atoms'
import './styles.scss'

export default function Home() {

  const [product, updateProduct] = useRecoilState(productState)
  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false

  async function getProduct() {
    try {
      const { data }: any = await API.graphql(graphqlOperation(listProducts))
      const { items } = data.listProducts
      updateProduct(items)
    } catch (error) {
      console.log('Error getting product from DB', error)
    }
  }



  console.log(product)

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <RB.Row id={check ? 'home' : 'homeDark'} className='p-4'>
      <h1 className="t-catalogue mb-4">Catalogue </h1>
      <RB.Col sm={10} md={5} className='d-flex'>
        {product.map((item, idx) => (
          <div>
            <RB.Card key={idx} className='productCard'>
              <RB.Card.Header>
                <RB.Image src={item.image} alt='card-header'
                  style={{ width: '100%' }} />
              </RB.Card.Header>
              <RB.Card.Body className='card-body'>
                <h6 className='t-text'>{item.name}</h6>
                <h6 className='t-text'>{item.description}</h6>
                <h6 className='t-text'>{item.price}</h6>
                <h6 className='t-text'>{item.category}</h6>
              </RB.Card.Body>
            </RB.Card>
          </div>
        ))}
      </RB.Col>
    </RB.Row>
  )
}
