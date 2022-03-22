import * as RB from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { cardInfo } from '.'
import { darkModeState } from '../atoms'
import './styles.scss'

export default function Card() {

    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    return (
        <>
            { cardInfo.map((item, idx) => (
                <div key={idx} className={check ? 'card-holder' : 'card-holderDark'}>
                    <RB.Card className='card'>
                        <RB.Card.Header className='card-header'>
                            <RB.Image className='card-img' src={item.img} alt='' />
                        </RB.Card.Header>
                        <RB.Card.Body>
                            <strong>{item.description}</strong>
                        </RB.Card.Body>
                    </RB.Card>
                </div>
            ))}
        </>
    )
}
