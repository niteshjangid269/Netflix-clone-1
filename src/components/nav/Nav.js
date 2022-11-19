import './Nav.css'


const Nav = () => {
    return (
    <nav>
        <section>
        <div className="nav_left">

           <img
            className="nav_logo" 
            alt="logo" 
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
           />

           <div className="nav_links">
        <a href='/'>Home</a>
        <a href='/'>TV Shows</a>
        <a href='/'>TV Movies</a>
        <a href='/'>New & Popular</a>
        <a href='/'>My List</a>
        <a href='/'>Browse by Language</a>

           </div>
        </div>
        <div className="nav_Right">
            <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/scg'>
            <path
            fillRule='evenodd'
            clipRule='evenodd'
            path='https://www.freeiconspng.com/img/16613'

            fill='currentColor'>
                

            </path>
            </svg>
            <p>Children</p>
            <svg
            width='24'
            height='24'
            viewBox='0 0 23 23'
            fill='none'
            xmlns='http://www.w3.org/2000/scg'>
            <path
            fillRule='evenodd'
            clipRule='evenodd'
            path='https://www.freeiconspng.com/img/16613'
            fill='currentColor'>
                

            </path>
            </svg>
            <img className='new_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'>
            </img>
            
        </div>
        </section>
    </nav> )
}
export default Nav;