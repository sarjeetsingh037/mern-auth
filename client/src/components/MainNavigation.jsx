import { Component } from 'react'
import { Link } from 'react-router-dom'

export class MainNavigation extends Component {
  render() {
    return (
        <header className='bg-slate-200 p-4'> 
            <nav className='flex justify-between items-center text-2xl max-w-6xl mx-auto'>
                <h1 className='font-extrabold'>MERN Auth App</h1>
                <ul className='flex  gap-5'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                    <li><Link to='/sign-up' >SignUp</Link></li>
                </ul>
            </nav>
       </header>
    )
  }
}

export default MainNavigation