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
            {/* <RB.Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <RB.Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </RB.Carousel.Caption>
            </RB.Carousel.Item>
            <RB.Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <RB.Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </RB.Carousel.Caption>
            </RB.Carousel.Item> */}
        </RB.Carousel>
    )
}
