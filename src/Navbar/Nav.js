import './Navbar.css';
import Search from '../Inputs/Search';
import { Home, Message, New } from '../NavLogos';
import { ProfilePic } from '../Profile/Profile';


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
                    <Home/>
                    <Message/>
                    <New/>
                    <ProfilePic src='/img/profile/jammin_coder.jpg' width='32px'/>
                </div>
            </div>
        </div>
    )
}