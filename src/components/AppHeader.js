import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CAvatar,
} from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/Avatar.png'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilMenu } from '@coreui/icons'

import logo from 'src/assets/brand/assignment2.png'
import { useState, useEffect } from 'react'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  // Function to update the current date and time
  const updateDateTime = () => {
    setCurrentDateTime(new Date())
  }

  // Use the useEffect hook to update the date and time every second
  useEffect(() => {
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Custom options for formatting the date and time
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img src={logo} alt="Description of the" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Good Morning! {currentDateTime.toLocaleString('en-US', options)}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        | Nada Amer
        <CAvatar size="md ms-2" src={avatar1} />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
