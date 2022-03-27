import * as RB from 'react-bootstrap'
import { API, graphqlOperation } from 'aws-amplify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { listProducts } from '../../graphql/queries'
import { darkModeState, productState, refreshState } from '../atoms'
import Loader from './loader/Loader'
import './styles.scss'
import Catalogue from './catalogue/Catalogue'

export default function Home() {

  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false

  return (
    <RB.Row id={check ? 'home' : 'homeDark'} className='p-4'>
      <Catalogue />
    </RB.Row>
  )
}
