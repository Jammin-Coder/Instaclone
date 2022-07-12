let dir = '/img/';
let message = dir + '/message.png';
let home = dir + '/home.png';
let newPost = dir + '/new.png';
let defaultSize = 24 + 'px';

export function Message(props) {
    let size;
    props.size ? size = props.size + 'px': size = 32 + 'px';
    return <a className='Navbar__link' href='/messages'>
        <img src={message} style={{width: size, height: size }}/>
    </a>
}

export function Home(props) {
    let size;
    props.size ? size = props.size + 'px': size = defaultSize;
    return <a className='Navbar__link' href='/'>
        <img src={home} style={{width: size, height: size }}/>
    </a>
}

export function New(props) {
    let size;
    props.size ? size = props.size + 'px': size = defaultSize;
    return <a className='Navbar__link' href='/'>
        <img src={newPost} style={{width: size, height: size }}/>
    </a>
}

