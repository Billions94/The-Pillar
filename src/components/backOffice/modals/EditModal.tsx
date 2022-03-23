import * as RB from 'react-bootstrap'
import React, { SetStateAction } from 'react'
import { UpdateForm } from '../Form'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import './styles.scss'

interface EditModalProps {
    modalShow: boolean
    setModalShow: React.Dispatch<SetStateAction<boolean>>
}

export default function EditModal({ modalShow, setModalShow }: EditModalProps) {
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
                    <div>
                        <UpdateForm  />
                    </div>
                </RB.Modal.Body>
            </RB.Modal>
        </>
    )
}
