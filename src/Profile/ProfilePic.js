import './ProfilePic.css';

export default function ProfilePic(props) {
    let source;
    let width;
    props.src ? source = props.src: source = '/img/nobody.png';
    props.width ? width = props.width: width = '100%';
    return (
        <div className='ProfilePic' style={{ width: width }}>
            <img src={ source } />
        </div>
    )
}