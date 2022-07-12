import './Profile.css';

export function ProfilePic(props) {
    let source;
    let width;
    props.src ? source = props.src: source = '/img/nobody.png';
    props.width ? width = props.width: width = '100%';
    return (
        <div className='ProfilePic' style={{ width: width }}>
            <img className='ProfilePic__img' src={ source } alt={ props.alt }/>
        </div>
    )
}

export function ProfileBio(props) {
    return (
        <div className='ProfileBio'>
            <div className='ProfileBio__header'>
                <h2>jammin_coder</h2>
                <button className='ProfileBio__edit'>Edit profile</button>
                <a className='ProfileBio__settings' href='#settings'>Settings</a>
            </div>
            
            <div className='ProfileBio__stats'>
                <a href='#posts'><b>2</b> posts</a>
                <a href='#followers'><b>17</b> followers</a>
                <a href='#following'><b>15</b> following</a>
            </div>

            <div className='ProfileBio__main'>
                <p className='ProfilBio__name'>Tim Batt</p>
                I'm a young software developer and aspiring artist/designer.<br/>
                <a href='https://timbattblog.com'>timbattblog.com</a>
            </div>
        </div>
    );
}

export function ProfileNav(props) {
    return (
        <div className='ProfileNav'>
            <div className='ProfileNav__options'>
                <a className='ProfileNav__options__option--active' href='#posts'>Posts</a>
                <a className='ProfileNav__options__option' href='#saved'>Saved</a>
                <a className='ProfileNav__options__option' href='#tagged'>Tagged</a>
            </div>
        </div>
    );
}

export function ProfileHeader(props) {
    return (
        <div className='ProfileHeader'>
            <ProfilePic src='/img/prof_pic3.jpg' width='188px' />
            <ProfileBio/>
        </div>
    );
}


export default function Profile(props) {
    return (
        <div className='page-wrapper'>
            <div className='Profile'>
                <ProfileHeader />
                <ProfileNav/>
            </div>
        </div>
    );
}