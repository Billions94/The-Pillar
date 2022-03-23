import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listProducts } from '../../graphql/queries'
import { darkModeState, productState, refreshState } from '../atoms'
import './styles.scss'

export default function Home() {

  const [product, updateProduct] = useRecoilState(productState)
  const darkMode = useRecoilValue(darkModeState)
  const refresh = useRecoilValue(refreshState)
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


  useEffect(() => {
    getProduct()
  }, [refresh])

  return (
    <RB.Row id={check ? 'home' : 'homeDark'} className='p-4'>
      <h1 className="t-catalogue mb-4">Catalogue </h1>
      <RB.Col md={10} lg={10}>
        <div className='card-container'>
          <>
            {!product ? null : product.map((item, idx) => (
              <RB.Card key={idx} className='productCard'>
                <RB.Card.Header className='card-header'>
                  <RB.Image src={item.image} alt='image'
                    className='card-img'/>
                </RB.Card.Header>
                <RB.Card.Body className='card-body'>
                  <h6 className='t-text'>{item.name}</h6>
                  <h6 className='t-text'>{item.description}</h6>
                  <h6 className='t-text'>{item.price}</h6>
                  <h6 className='t-text'>{item.category}</h6>
                </RB.Card.Body>
              </RB.Card>
            ))}
          </>
        </div>
      </RB.Col>
    </RB.Row>
  )
}
