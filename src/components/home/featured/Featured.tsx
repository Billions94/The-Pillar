import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import './styles.scss'

export default function Featured() {

    const darkMode = useRecoilValue(darkModeState)
    const check: boolean = darkMode === false

    return (
        <Container id={check ? 'feature' : 'feature-dark'} fluid >
            <Row>
                <Col sm={12} md={2} lg={2}>
                    <h1 className='t-header text-left'>Featured</h1>
                </Col>
                <Col className='featured-container' sm={12} md={10} lg={20}>
                    <Row className='featured-grid'>
                        <Col className='top-left' sm={12} md={6} lg={6}>
                            <h1 className='Nig '>Nigerian History</h1>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda repellat expedita eveniet dolor temporibus aspernatur velit consequatur iste? Culpa optio maiores necessitatibus aperiam corporis asperiores laborum minima, fugit nam?
                        </Col>
                        <Col className='top-right' sm={12} md={6} lg={6}>
                            <h1 className='Gh'>Ghanaian History</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi numquam aspernatur autem delectus? Sapiente quam non, aut, rerum corrupti ea similique totam quas vel repudiandae culpa incidunt architecto perspiciatis.
                        </Col>
                        <Col className='bottom-left' sm={12} md={6} lg={6}>
                            <h1 className='Jac'>Jamaican History</h1>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi numquam aspernatur autem delectus? Sapiente quam non, aut, rerum corrupti ea similique totam quas vel repudiandae culpa incidunt architecto perspiciatis.
                        </Col>
                        <Col className='bottom-right' sm={12} md={6} lg={6}>
                            <h1 className='Sa'>South African History</h1>
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi numquam aspernatur autem delectus? Sapiente quam non, aut, rerum corrupti ea similique totam quas vel repudiandae culpa incidunt architecto perspiciatis.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
