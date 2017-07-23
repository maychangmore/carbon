import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

export default ({ children, enableHeroText }) => (
  <div className="main">
    <Meta />
    <Header enableHeroText={enableHeroText} />
    <div className="page">
      { children }
    </div>

    <Footer />

    <style jsx>{`
      .main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-width: 848px;
        min-height: 704px;
      }
    `}</style>
  </div>
)