import React from 'react'
import * as RB from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { alertState } from '../../atoms'
import './styles.scss'

export default function AlertModal() {

    const smShow = useRecoilValue(alertState)

    return (
        <div>
            <RB.Modal
                size="sm"
                centered
                show={smShow}
                // onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <RB.Modal.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati veritatis quod deleniti, accusantium quo dolorum repellat mollitia in dicta distinctio sapiente aliquam sequi ipsum ullam eius, dolor, soluta magni.
                </RB.Modal.Body>
            </RB.Modal>
        </div>
    )
}
