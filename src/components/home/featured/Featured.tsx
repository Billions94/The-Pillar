import { Container, Row, Col } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import './styles.scss'

export default function Featured () {

    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    return (
        <Container id={check ? 'header' : 'header-dark'} fluid >
            <Row>
                <Col sm={12} md={2} lg={2}>
                    <h1 className='t-header text-left'>Featured</h1>
                </Col>
                <Col sm={12} md={10} lg={20}>
                </Col>
            </Row>
        </Container>
    )
}
