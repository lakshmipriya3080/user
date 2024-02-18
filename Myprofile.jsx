//Myprofile.jsx
import React, { useState } from 'react'
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import './Myprofile.css'
import { Button} from '@mui/material'

const Myprofile = (props) => {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    hrId: 'EMP1234',
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
  });

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    // Here, you can perform actions like sending the user data to a server
    // For now, let's log the user object to the console
    console.log(userData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    // Reset user data to its original state or fetch from API again if needed
    // For example:
    // setUserData({ hrId: 'EMP1234', fullName: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St, City, Country' });
  };

  
  return (
    <div>
      <div >
    <Topbar xxx={props.checkLogout}/>
    </div>
    <div className='profile-container'>
      <div className="profile-box">
      <h1>User Profile</h1>
      <div className="profile-details">
        <div>
          <label>HR ID:</label>
          <span>{userData.hrId}</span>
        </div>
        <div>
          <label>Full Name:</label>
          {editing ? (
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.fullName}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          {editing ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.email}</span>
          )}
        </div>
        <div>
          <label>Phone:</label>
          {editing ? (
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.phone}</span>
          )}
        </div>
        <div>
          <label>Address:</label>
          {editing ? (
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.address}</span>
          )}
        </div>
      </div>
      
      <div className="button-container">
        {editing ? (
          <>
            <Button onClick={handleSave} variant='contained'>Save</Button>
            <Button onClick={handleCancel} variant='contained'>Cancel</Button>
          </>
        ) : (
          
          <Button onClick={handleEditToggle} variant='contained'>Edit</Button>
        )}
      </div>
    </div>
    </div>
    </div>
  )
}

export default Myprofile
