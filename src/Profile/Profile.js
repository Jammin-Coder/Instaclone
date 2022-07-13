import { Outlet, useLocation } from 'react-router-dom';

export function ProfilePic(props) {
    let source;
    let width;
    let classes;

    props.className ? classes = `rounded-full ${props.className}`: classes = 'rounded-full';
    props.src ? source = props.src: source = '/img/nobody.png';
    props.width ? width = props.width: width = '100%';

    return (
        <div className='ProfilePic' style={{ width: width }}>
            <img className={ classes } src={ source } alt={ props.alt }/>
        </div>
    )
}

export function ProfileBio(props) {
    return (
        <div className='ProfileBio'>
            <div className='flex gap-5 [align-items:center] my-5 flex-wrap lg:flex-nowrap'>
                <h2 className='text-3xl'>jammin_coder</h2>
                <button className='btn'>Edit profile</button>
                <a className='flex underline' href='#settings'>Settings</a>
            </div>
            
            <div className='flex my-5 gap-5'>
                <a href='#posts'><b>2</b> posts</a>
                <a href='#followers'><b>17</b> followers</a>
                <a href='#following'><b>15</b> following</a>
            </div>

            <div className='ProfileBio__main'>
                <p className='font-bold'>Tim Batt</p>
                I'm a young software developer and aspiring artist/designer.<br/>
                <a className='text-blue-700 font-bold' href='https://timbattblog.com'>timbattblog.com</a>
            </div>
        </div>
    );
}


export function ProfileHeader(props) {
    return (
        <div className='ProfileHeader mb-5'>
            <div className='grid place-items-center md:[grid-template-columns:30%_70%] gap-5'>
                <ProfilePic className='md:ml-5' src='/img/prof_pic3.jpg' width='188px' />
                <ProfileBio/>
            </div>
        </div>
    );
}

export function ProfileSectionLink(props) {
    const location = useLocation();
    let style;

    if (props.href == location.pathname) style = {borderTop: '1px solid black', color: 'black'}
    return (
        <a className='profile-section-link' style={ style } href={ props.href }>
            { props.children }
        </a>
    );
}

export function ProfileNav(props) {
    return (
        <div className='ProfileNav flex justify-center mb-10 border-t border-t-gray-200'>
            <div className='flex gap-4'>
                <ProfileSectionLink href='/posts'>Posts</ProfileSectionLink>
                <ProfileSectionLink href='/saved'>Saved</ProfileSectionLink>
                <ProfileSectionLink href='/tagged'>Tagged</ProfileSectionLink>
            </div>
        </div>
    );
}


export function Posts(props) {
    return (
        <div className='Posts grid grid-cols-3 gap-1'>
            <img src='/img/posts/panda.png' className='aspect-square border border-gray-700'/>
            <img src='/img/posts/panda.png' className='aspect-square border border-gray-700'/>
            <img src='/img/posts/panda.png' className='aspect-square border border-gray-700'/>
            <img src='/img/posts/panda.png' className='aspect-square border border-gray-700'/>
        </div>
    );
}



export function Profile(props) {
    return (
        <div className='Profile page-wrapper'>
            <ProfileHeader />
            <ProfileNav/>
            { props.children }
            <Outlet/>
        </div>
    );
}

export function SavedPage(props) {
    return (
        <Profile>
            SAVES!
        </Profile>
    );
}

export function PostsPage(props) {
    return (
        <Profile>
            <Posts/>
        </Profile>
    );
}

export function TaggedPage(props) {
    return (
        <Profile>
            No tags
        </Profile>
    );
}