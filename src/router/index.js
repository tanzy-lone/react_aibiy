import { Navigate } from 'react-router-dom'
import React from 'react'
import Demo from 'views/Demo'

const Home = React.lazy(() => import('views/Home'))
const Detail = React.lazy(() => import('views/Detail'))
const More = React.lazy(() => import('views/More'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/more',
    element: <More />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes
