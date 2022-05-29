import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import '../css/index.css'

type LayoutProps = {
    pageTitle: string,
    children: ReactNode
}

const Layout = ({pageTitle, children}: LayoutProps) => {
  return (
    <div className='max-w-md m-auto'>
      <title>{pageTitle}</title>
      <nav>
        <ul className='flex text-black pr-8 space-x-2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className='font-medium text-purple-600 text-xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout