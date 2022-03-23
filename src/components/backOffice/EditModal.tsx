import * as RB from 'react-bootstrap'
import React, { SetStateAction } from 'react'
import Form from './Form'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'

interface EditModalProps {
    index: number
    modalShow: boolean
    setModalShow: React.Dispatch<SetStateAction<boolean>>
}

export default function EditModal({ index, modalShow, setModalShow }: EditModalProps) {
    const onHide = () => setModalShow(false)
    const darkMode = useRecoilValue(darkModeState)
    const check = darkMode === false

    return (
        <>
            <RB.Modal id={check ? 'editModal' : 'editModal-dark'}
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <RB.Modal.Header className='d-flex'>
                    <RB.Modal.Title id="contained-modal-title-vcenter">
                    </RB.Modal.Title>
                    <div className='ml-auto'>
                        <RB.Button onClick={onHide}
                            className='closeBtn'>
                            ❌
                        </RB.Button>
                    </div>
                </RB.Modal.Header>
                <RB.Modal.Body>
                    <Form />
                </RB.Modal.Body>
                {/* <RB.Modal.Footer>
                    <RB.Button>Update</RB.Button>
                </RB.Modal.Footer> */}
            </RB.Modal>
        </>
    )
}
