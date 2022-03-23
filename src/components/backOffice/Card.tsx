import React, { SetStateAction } from 'react'
import * as RB from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { cardInfo } from '.'
import { darkModeState } from '../atoms'
import './styles.scss'

interface CardProps {
    newProd: boolean
    editProd: boolean
    setNewProd: React.Dispatch<SetStateAction<boolean>>
    setEditProd: React.Dispatch<SetStateAction<boolean>>
}

export default function Card({ newProd, editProd, setNewProd, setEditProd }: CardProps) {

    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    function toggle (idx: number) { 
        if(idx === 0) {
            newProd === false ? setNewProd(true) : setNewProd(false)
        } else if(idx === 1) {
            editProd === true ? setEditProd(true) : setEditProd(false)
        }  
    }

    return (
        <>
            {cardInfo.map((item, idx) => {
                if (idx === 0) {
                    return (
                        <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
                            <RB.Card onClick={() => toggle(idx)}
                                className='card'>
                                <RB.Card.Header className='card-header'>
                                    <RB.Image className='card-img' src={item.img} alt='' />
                                </RB.Card.Header>
                                <RB.Card.Body>
                                    <strong>{item.description}</strong>
                                </RB.Card.Body>
                            </RB.Card>
                        </div>
                    )
                } else if (idx === 1) {
                    return (
                        <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
                            <RB.Card onClick={() => toggle(idx)}
                                className='card'>
                                <RB.Card.Header className='card-header'>
                                    <RB.Image className='card-img' src={item.img} alt='' />
                                </RB.Card.Header>
                                <RB.Card.Body>
                                    <strong>{item.description}</strong>
                                </RB.Card.Body>
                            </RB.Card>
                        </div>
                    )
                }
            })}
        </>
    )
}
