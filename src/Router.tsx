import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import TopNav from './components/Layout/TopNav'
import Home from './pages/Home'

const Router: React.FC = () => {
  return (
    <>
      <TopNav />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  )
}

export default withRouter(Router)
