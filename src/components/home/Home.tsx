import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listProducts } from '../../graphql/queries'
import { darkModeState, productState, refreshState } from '../atoms'
import './styles.scss'

export default function Home() {


  const navigate = useNavigate()
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
      <h1 className="t-catalogue mt-3 mb-5">Catalogue </h1>
      <RB.Col md={10} lg={10}>
        <div className='card-container'>
          <>
            {!product ? null : product.map((item, idx) => (
              <RB.Col key={idx} lg={3}>
                <RB.Card 
                  onClick={() => navigate(`/product/${item.id}`)}
                  className='productCard'>
                  <RB.Card.Header className='card-header'>
                    <RB.Image src={item.image} alt='image'
                      className='card-img' />
                  </RB.Card.Header>
                  <RB.Card.Body className='card-body'>
                    <h6 className='t-text'>{item.name}</h6>
                    <h6 className='t-text'>{item.description}</h6>
                    <h6 className='t-text'>{item.price}</h6>
                    <h6 className='t-text'>{item.category}</h6>
                  </RB.Card.Body>
                </RB.Card>
              </RB.Col>
            ))}
          </>
        </div>
      </RB.Col>
    </RB.Row>
  )
}
