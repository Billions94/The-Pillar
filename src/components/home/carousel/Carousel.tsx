import React from 'react';
import * as RB from 'react-bootstrap'
import './styles.scss'

interface CarouselProps {
    image?: string
}

export default function Carousel({ image }: CarouselProps) {
    return (
        <RB.Carousel id='carousel'>
            <RB.Carousel.Item>
                <img
                    className="d-block img"
                    src={image}
                    alt="First slide"
                />
                <RB.Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </RB.Carousel.Caption>
            </RB.Carousel.Item>
        </RB.Carousel>
    )
}
