import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Form = React.lazy(() => import('./views/dashboard/Form'))

// Base
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/form', name: 'Form', element: Form },
]

export default routes
