import * as RB from 'react-bootstrap'
import { navbarBrand } from '../../lib'
import { useNavigate, Link } from 'react-router-dom'
import { navBarInfo } from './NavBarInfo'
import './styles.scss'

export default function NavBar() {

    const navigate = useNavigate()

    return (
        <RB.Navbar id='myNavBar' bg="light">
            <RB.Navbar.Brand
                className='brand'
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}>
                <div className='brand-container'>
                    <RB.Image src={navbarBrand} alt='' width='25px' />
                    <>
                        <span className='d-text'>Dagger</span>
                    </>
                </div>
            </RB.Navbar.Brand>
            <div className='link-container'>
                {navBarInfo.map((item, idx) => (
                    <RB.Nav.Link key={idx} className='navLink'
                        onClick={() => navigate(`${item.path}`)}>
                        <RB.Image src={item.icon} alt='' width='23px' />
                        <span>{item.title}</span>
                    </RB.Nav.Link>
                ))}
            </div>
        </RB.Navbar>
    )
}
