import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'

import AppHeader from 'components/AppHeader'
import AppFooter from 'components/AppFooter'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()
  return (
    <div>
      <div className="header">
        <AppHeader />
      </div>
      <div className="content">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
})

export default App
