import { Link } from 'react-router-dom'
import './Navbar.css';
import Search from '../Inputs/Search';
import { HomeLogo } from '../Logos';


export default function Navbar(props) {
    return (
        <div className='Navbar'>
            <div className='Navbar__content'>
                <div className='Navbar__content__brand'>
                    <p>Instaclone</p>
                </div>

                <div className='Navbar__content__search'>
                    <Search/>
                </div>

                <div className='Navbar__content__actions'>
                    <HomeLogo size={64}/>
                </div>
            </div>
        </div>
    )
}