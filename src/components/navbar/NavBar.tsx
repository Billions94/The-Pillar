import * as RB from 'react-bootstrap'
import * as Icon from '../../lib'
import { useNavigate } from 'react-router-dom'
import { navBarInfo } from './NavBarInfo'
import { darkModeState } from '../atoms'
import { useRecoilState } from 'recoil'
import './styles.scss'

export default function NavBar() {

    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)
    const toggle = () => {
        darkMode === false ? setDarkMode(true) : setDarkMode(false)
    }

    const check: boolean = darkMode === false

    return (
        <RB.Navbar id='myNavBar' className={check ? 'light' : 'dark'}>
            <RB.Navbar.Brand
                className='brand'
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}>
                <div className='brand-container'>
                    <RB.Image src={check ? Icon.navbarBrand : Icon.navbarBrandDark} alt='' className='brandIcon' />
                    <>
                        <span className={check ? 'd-text' : 'd-textDark'}>Dagger</span>
                    </>
                </div>
            </RB.Navbar.Brand>
            <div className='link-container'>
                <div>
                    <RB.Button onClick={toggle}
                        className='darkModeBtn'>
                        <RB.Image src={check ? Icon.moon : Icon.sun} alt='' className='btn-img' />
                    </RB.Button>
                </div>
                {navBarInfo.map((item, idx) => (
                    <div key={idx} className=''>
                        <RB.Nav.Link className='navLink'
                            onClick={() => navigate(`${item.path}`)}>
                            <span className={check ? 'title' : 'title-dark'}>
                                {item.title}
                            </span>
                            <span className='icon'>●</span>
                            {/* <RB.Image src={check ? item.icon: item.iconDark} 
                                className='icon'
                                alt='' width='8px' /> */}
                        </RB.Nav.Link>
                    </div>
                ))}
            </div>
        </RB.Navbar>
    )
}
