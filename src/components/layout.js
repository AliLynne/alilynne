import React from 'react'

// Components made by me.
import Footer from '../components/footer'
import Header from '../components/header'

import '../styles/reset.scss'
import '../styles/base.scss'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <main>
          {children}
        </main>
        
      </div>
      <Footer />
    </div>
  )
}

export default Layout