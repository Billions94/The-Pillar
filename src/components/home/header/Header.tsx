import { Container, Row, Col } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'

export default function () {

    const darkMode = useRecoilValue(darkModeState)

    return (
        <Container id='header' fluid style={{ width: '100vw', height: '100vh', background: 'white' }}>
            <Row>
                <Col sm={12} md={2} lg={2}>
                    <h1 className='text-auto'>Home</h1>
                </Col>
                <Col sm={12} md={10} lg={20}>
                </Col>
            </Row>
        </Container>
    )
}
