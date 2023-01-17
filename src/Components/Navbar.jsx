import '../App.css';

export const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="nav-btn">
       <button className='btn'><a href='/'>Home</a></button>
       <button className='btn'><a href='Niko'>Niko</a></button>
       <button className='btn'><a href='Doug'>Doug</a></button>
       <button className='btn'><a href='Kimmy'>Kimmy</a></button>
       <button className='btn'><a href='Ghaslin'>Ghaslin</a></button>
       <button className='btn'><a href='David'>David</a></button>
      </div>
     </nav>
    </>
  )
}
