import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setsearch}) => {
  return (
    <nav className='nav'>
      <form className='searchFrom' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label>
        <input type="text"
        id='search'
        placeholder='search post'
        value={search} 
        onChange={(e)=>setsearch(e.target.value)}
        />
      </form>
      <ul className='list'>
        <li><Link to='/' style={{textDecoration:"none",textAlign:'center',minWidth:'50px'}} className='link'>Home</Link></li>
        <li><Link to='/post' style={{textDecoration:"none"}} className='link'>Post</Link></li>
        <li><Link to='/about' style={{textDecoration:"none"}} className='link'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav