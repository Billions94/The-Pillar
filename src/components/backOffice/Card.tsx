import * as RB from 'react-bootstrap'
import { cardInfo } from '.'

export default function Card() {
    return (
        <>
            { cardInfo.map((item, idx) => (
                <div key={idx} className='card-holder'>
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
