<<<<<<< HEAD
import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import '../css/index.css'
=======
import * as React from 'react';
import { ReactNode } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import '../css/index.css';
>>>>>>> 3a0a38e (part 3 (broken))

type LayoutProps = {
    pageTitle: string,
    children: ReactNode
}

const Layout = ({pageTitle, children}: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='max-w-md m-auto'>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className='text-gray-500 font-bold text-lg m-12'>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className='flex text-black pr-8 space-x-2'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className='font-medium text-purple-600 text-xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout;
