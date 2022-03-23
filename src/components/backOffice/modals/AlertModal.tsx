import * as RB from 'react-bootstrap'
import { useRecoilState } from 'recoil'
import { alertState } from '../../atoms'
import './styles.scss'

export default function AlertModal() {

    const [smShow, setSmShow] = useRecoilState(alertState)

    return (
        <div>
            <RB.Modal
                size="sm"
                centered
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <RB.Modal.Body>

                </RB.Modal.Body>
            </RB.Modal>
        </div>
    )
}
