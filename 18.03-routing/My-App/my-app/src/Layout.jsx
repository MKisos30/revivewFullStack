import React from 'react'
import {Outlet, Link} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav className="navBar">
            <link to="Home">Home</link>
            <link to="About">About</link>
            <link to="Contact">Contact</link>
        </nav>

       <main>
            <Outlet />
       </main>

        <footer>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          reprehenderit inventore atque id necessitatibus nulla ea earum
          voluptates vero quam labore quisquam enim harum, fuga ex, minima
          pariatur, impedit saepe!
        </footer>
    </div>
  )
}

export default Layout