import React, { SetStateAction } from 'react'
import * as RB from 'react-bootstrap'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cardInfo } from '.'
import { darkModeState, productState, selectedState } from '../atoms'
import './styles.scss'

interface CardProps {
    newProd: boolean
    editProd: boolean
    setNewProd: React.Dispatch<SetStateAction<boolean>>
    setEditProd: React.Dispatch<SetStateAction<boolean>>
    setModalShow?: React.Dispatch<SetStateAction<boolean>>
}

export default function Card({ newProd, editProd, setNewProd, setEditProd }: CardProps) {

    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    function toggle(idx: number) {
        if (idx === 0) {
            newProd === false ? setNewProd(true) : setNewProd(false)
        } else if (idx === 1) {
            editProd === false ? setEditProd(true) : setEditProd(false)
        }
    }

    return (
        <>
            {cardInfo.map((item, idx) => {
                return (
                    <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
                        <RB.Card onClick={() => toggle(idx)}
                            className='card'>
                            <RB.Card.Header className='card-header'>
                                <RB.Image className='card-img' src={item.img} alt='' />
                            </RB.Card.Header>
                            <RB.Card.Body className='card-body'>
                                <h6 className='card-text'>{item.description}</h6>
                            </RB.Card.Body>
                        </RB.Card>
                    </div>
                )
            })}
        </>
    )
}

export function ProdCard({ setModalShow }: CardProps) {

    const [products, updateProducts] = useRecoilState(productState)
    const [selected, updateSelected] = useRecoilState(selectedState)
    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    function toggle(idx: number) {
       setModalShow && setModalShow(true)
       updateSelected(idx)
    }


    return (
        <>
            {products.map((item, idx) => (
                    <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
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
                ))}
        </>
    )
}
