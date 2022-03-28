import React from 'react';
import * as RB from 'react-bootstrap'
import Catalogue from './catalogue/Catalogue'
import Featured from './featured/Featured'
import './styles.scss'

export default function Home() {
  return (
    <RB.Row className='p-4'>
      <Featured />
      <Catalogue />
    </RB.Row>
  )
}
