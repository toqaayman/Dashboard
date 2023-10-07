import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilViewQuilt } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilViewQuilt} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'SETTINGS',
  },
  {
    component: CNavGroup,
    name: 'ATM Settings',
    to: '/atm',
    items: [
      {
        component: CNavItem,
        name: '1',
        to: '/1',
      },
      {
        component: CNavItem,
        to: '/2',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Business Setup',
    to: '/b',
    items: [
      {
        component: CNavItem,
        name: '1',
        to: '/1',
      },
      {
        component: CNavItem,
        name: '2',
        to: '/2',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'User Management',
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/dashboard',
      },
      {
        component: CNavItem,
        name: 'Profiles',
        to: '/Profiles',
      },
      {
        component: CNavItem,
        name: 'Groups',
        to: '/Groups',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'License Management',
    to: '/l',
  },
]

export default _nav
