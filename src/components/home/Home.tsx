import * as RB from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import Catalogue from './catalogue/Catalogue'
import Featured from './featured/Featured'
import './styles.scss'

export default function Home() {

  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false

  return (
    <RB.Row id={check ? 'home' : 'homeDark'} className='p-4'>
      <Featured />
      <Catalogue />
    </RB.Row>
  )
}
