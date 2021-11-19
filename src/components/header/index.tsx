
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import './style.scss'
export const Header = () => {

    return (
        <header className='header' >
            <div className='header__content'>
            <Link to='/heroes'>
                <img src={logo} alt='logo'/>
            </Link>
            </div>
        </header>
    )
}