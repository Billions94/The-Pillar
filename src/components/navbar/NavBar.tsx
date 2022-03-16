import * as RB from 'react-bootstrap'
import { navbarBrand } from '../../lib'
import { useNavigate, Link } from 'react-router-dom'
import { navBarInfo } from './NavBarInfo'
import './styles.scss'

export default function NavBar() {

    const navigate = useNavigate()

    return (
        <RB.Navbar id='myNavBar' bg="light">
            <RB.Navbar.Brand onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}>
                <div className='brand-container'>
                    <RB.Image src={navbarBrand} alt='' width='35px' />
                    <>
                        <span className='d-text'>Dagger</span>
                    </>
                </div>
            </RB.Navbar.Brand>
            <>
                {navBarInfo.map(item => (
                    <RB.NavDropdown.Item onClick={() => navigate(`${item.path}`)}>
                        {item.title}
                    </RB.NavDropdown.Item>
                ))}
            </>
        </RB.Navbar>
    )
}
