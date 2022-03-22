import * as RB from 'react-bootstrap'
import * as Icon from '../../lib'
import { navbarBrand } from '../../lib'
import { useNavigate } from 'react-router-dom'
import { navBarInfo } from './NavBarInfo'
import { darkModeState } from '../atoms'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import './styles.scss'

export default function NavBar() {

    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)
    const toggle = () => {
        darkMode === false ? setDarkMode(true) : setDarkMode(false)
    }

    return (
        <RB.Navbar id='myNavBar' bg={darkMode === false ? 'light' : 'dark'}>
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
                <div>
                    <RB.Button onClick={toggle}
                        className='darkModeBtn'>
                        <RB.Image src={darkMode === false ? Icon.moon : Icon.sun} alt='' width='25px' />
                    </RB.Button>
                </div>
                {navBarInfo.map((item, idx) => (
                    <div key={idx} className='d-flex justify-content-between'>
                        <RB.Nav.Link className='navLink'
                            onClick={() => navigate(`${item.path}`)}>
                            <RB.Image src={darkMode === false ? item.icon: item.iconDark} alt='' width='23px' />
                            <span className={darkMode === false ? 'title' : 'title-dark'}>
                                {item.title}
                            </span>
                        </RB.Nav.Link>
                    </div>
                ))}
            </div>
        </RB.Navbar>
    )
}
