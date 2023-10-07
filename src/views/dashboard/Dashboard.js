import React from 'react'
import { useState } from 'react'
import AddUserForm from './Form'
import {
  CAvatar,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { cilPencil, cilOptions, cilXCircle, cilSearch, cilLockLocked } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { BiCalendar } from 'react-icons/bi'

import avatar1 from 'src/assets/images/avatars/Avatar.png'

const Dashboard = () => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])
  const [username, setUserName] = useState('')
  const [userStatus, setUserStatus] = useState('Any')
  const [creationDate, setCreationDate] = useState('All Time')
  const [addUserVisible, setAddUserVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const toggleSelectAll = () => {
    setSelectAll(!selectAll)
    if (!selectAll) {
      setSelectedItems(Array.from({ length: tableExample.length }, (_, i) => i))
    } else {
      setSelectedItems([])
    }
  }
  const filterData = () => {
    const filteredData = tableExample.filter((item) =>
      item.user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setTableData(filteredData)
  }
  const resetSearch = () => {
    setSearchTerm('')
    setTableData(tableExample) // Change this line to setTableData
  }
  const handlePencilButtonClick = () => {
    // Handle the click event for the pencil button here
    console.log('Pencil button clicked')
  }

  const handleOptionsButtonClick = () => {
    // Handle the click event for the Options button here
    console.log('Options button clicked')
  }
  const handleAddUserSubmit = (formValues) => {
    // Perform the action for adding a new user with the form values
    console.log('Adding new user with the following values:', formValues)
  }
  const toggleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index))
    } else {
      setSelectedItems([...selectedItems, index])
    }
  }
  const tableExample = [
    {
      avatar: { src: avatar1 },
      user: {
        name: 'Ramy Mohsen',
        username: 'ramy.mohsen',
        status: 'Locked',
        email: 'ramy.mohsen@gogle.com',
        registered: 'Dec 10, 2021',
      },
      group: { name: 'office' },
    },
    {
      avatar: { src: avatar1 },
      user: {
        name: 'Hisham Hagag',
        username: 'hisham.haggag',
        status: 'Inactive',
        email: 'hisham.haggag@like.com',
        registered: 'Oct 22, 2018',
      },
      group: { name: 'Managers' },
    },
    {
      avatar: { src: avatar1 },
      user: {
        name: 'كريم فاروق',
        username: 'kareem.farouk',
        status: 'Active',
        email: 'kareem.farouk@nuvb.net',
        registered: 'Oct 15, 2018',
      },
      group: { name: 'office' },
    },
    {
      avatar: { src: avatar1 },
      user: {
        name: 'Khaled Adam',
        username: 'khaled.adam',
        status: 'Active',
        email: 'khaled.adam@like.com',
        registered: 'Jun 17, 2020',
      },
      group: { name: 'office' },
    },
    {
      avatar: { src: avatar1 },
      user: {
        name: 'Noor Hamdy',
        username: 'noor.hamdy',
        email: 'noor.hamdy@lesi.com',
        status: 'Active',
        registered: 'Sep 9, 2019',
      },
      group: { name: 'Managers' },
    },
    {
      avatar: { src: avatar1 },
      user: {
        name: 'حنان فوزي',
        username: 'hanan.fawzy',
        status: 'Active',
        email: 'hanan.fawzy@buno.net',
        registered: 'Sep 21, 2020',
      },
      group: { name: 'Head Office' },
    },
  ]
  const [tableData, setTableData] = useState(tableExample)

  const handleXCircleButtonClick = () => {
    // Create a copy of the tableData
    const updatedData = [...tableData]

    // Filter out the selected items
    const newData = updatedData.filter((item, index) => !selectedItems.includes(index))

    // Update the tableData state with the new data
    setTableData(newData)

    // Clear the selected items
    setSelectedItems([])
  }
  return (
    <>
      <div className="mb-3">
        <h3>User Management</h3>
        <div className="col-md-10 offset-md-11">
          <AddUserForm
            visible={addUserVisible}
            onCreate={handleAddUserSubmit}
            onCancel={() => setAddUserVisible(false)}
          />
        </div>
        <br></br>
        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <br></br>
              <div className="d-flex justify-content-between align-items-center mb-3 ms-4">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CIcon icon={cilSearch} customClassName="nav-icon" width="20" height="20" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="User Name"
                    className="form-control me-2"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <select
                    className="form-select me-2"
                    value={userStatus}
                    onChange={(e) => setUserStatus(e.target.value)}
                  >
                    <option value="Any">Any</option>
                  </select>
                  <div className="input-group">
                    <select
                      className="form-select"
                      value={creationDate}
                      onChange={(e) => setCreationDate(e.target.value)}
                    >
                      <option
                        value="All Time"
                        style={{
                          width: '30px',
                          margintop: '-10px',
                          marginleft: '5px',
                        }}
                      >
                        All Time
                      </option>
                    </select>
                    <button className="btn btn-outline-light" type="button">
                      <BiCalendar />
                    </button>
                  </div>
                </div>
                <div className="me-4">
                  <a href="/facebook">All Filters</a>
                </div>
              </div>
              <div className="ms-4">
                {selectedItems.length > 0 && (
                  <>
                    {selectedItems.length} Selected |
                    <button
                      type="button"
                      className="btn btn-light btn-sm me-2 ms-2"
                      onClick={handlePencilButtonClick}
                    >
                      <CIcon icon={cilPencil} customClassName="nav-icon" width="20" height="20" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-sm me-2 ms-2"
                      onClick={handleXCircleButtonClick}
                    >
                      <CIcon icon={cilXCircle} customClassName="nav-icon" width="24" height="24" />
                    </button>
                    <button type="button" className="btn btn-light btn-sm me-2 ms-2">
                      <CIcon
                        icon={cilLockLocked}
                        customClassName="nav-icon"
                        width="24"
                        height="24"
                      />
                    </button>
                    <button type="button" className="btn btn-light me-2">
                      Assign to Profile
                    </button>
                    <button type="button" className="btn btn-light me-2">
                      Assign to Group
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-sm me-2 ms-2"
                      onClick={handleOptionsButtonClick}
                    >
                      <CIcon icon={cilOptions} customClassName="nav-icon" width="24" height="24" />
                    </button>
                    <a onClick={() => setSelectedItems([])}> Unselect All </a>
                  </>
                )}
              </div>
              <CCardBody>
                <br />
                <CTable align="middle" className="mb-0 border" hover responsive>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">
                        <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
                      </CTableHeaderCell>
                      <CTableHeaderCell className="text-center">
                        <CIcon icon={cilPeople} />
                      </CTableHeaderCell>
                      <CTableHeaderCell>Name</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
                      <CTableHeaderCell>Email Address</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Group</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>Created on</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {tableExample.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell className="text-center">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(index)}
                            onChange={() => toggleSelectItem(index)}
                          />
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CAvatar size="md" src={item.avatar.src} />
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.user.name}</div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.user.username}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="clearfix">
                            <div className="float-start">
                              <div>{item.user.email}</div>
                            </div>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <div>{item.group.name}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.user.status}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div>{item.user.registered}</div>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  )
}

export default Dashboard
