// EmployeeProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, IconButton, InputAdornment } from '@mui/material';
import './Employeeprofile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';



const EmployeeProfile = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    position: '',
    manager: '',
  });
  const [editing, setEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);


  useEffect(() => {
    // Fetch employee data from the backend when the component mounts
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      // Make a GET request to your backend API to fetch employee data
      const response = await axios.get('/employeeprofile');
      setEmployeeData(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSave = async () => {
    try {
        let updatedData = { ...employeeData };
      if (profilePhoto) {
        // Perform photo upload logic (e.g., using FormData and axios)
        // Replace the following lines with your actual photo upload logic
        const formData = new FormData();
        formData.append('photo', profilePhoto);
        const response = await axios.post('/upload-photo', formData);
        updatedData.photoUrl = response.data.url;
      }
      // Make a PUT request to update employee data in the backend
      await axios.put('http://localhost:4005/employeeprofile', employeeData);
      setEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating employee profile:', error);
      alert('Failed to update profile. Please try again later.');
    }
  };
  const handlePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  return (
    <div className="employee-profile-container">
    <div className="employee-profile-box">

      <h1 className='photoicon'>My Profile</h1>
      <div className="profile-details">
      <label htmlFor="photo-upload">
            <input
              accept="image/*"
              id="photo-upload"
              type="file"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
            />
            <Avatar
              alt="Employee Photo"
              src={profilePhoto ? URL.createObjectURL(profilePhoto) : employeeData.photoUrl}
              sx={{ width: 100, height: 100 }}
            >
      <p className='photoicon'><AccountCircleIcon sx={{ fontSize: 100 }} /></p>
      </Avatar>
      <InputAdornment position="end">
              <IconButton
                aria-label="upload photo"
                component="span"
                color="primary"
                edge="end"
              >
                <CameraAltIcon />
              </IconButton>
            </InputAdornment>
          </label>
        <div>
          <label>Employee ID:</label>
          {editing ? (
            <input
              type="text"
              name="employeeId"
              value={employeeData.employeeId}
              onChange={handleInputChange}
            />
          ) : (
          <span>{employeeData.employeeId}</span>
          )}
        </div>
        <div>
          <label>Full Name:</label>
          {editing ? (
            <input
              type="text"
              name="fullName"
              value={employeeData.fullName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.fullName}</span>
          )}
        </div>
        <div>
        <label>Email id:</label>
          {editing ? (
            <input
              type="text"
              name="email"
              value={employeeData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.email}</span>
          )}
          </div>
          
          <div>
        <label>Phone no:</label>
          {editing ? (
            <input
              type="number"
              name="phone"
              value={employeeData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.phone}</span>
          )}
          </div>
          <div>
        <label>Address:</label>
          {editing ? (
            <textarea
              type="text"
              name="address"
              value={employeeData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.address}</span>
          )}
          </div>
          <div>
        <label>Department:</label>
          {editing ? (
            <input
              type="text"
              name="department"
              value={employeeData.department}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.department}</span>
          )}
          </div>
          <div>
        <label>Position:</label>
          {editing ? (
            <input
              type="text"
              name="position"
              value={employeeData.position}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.position}</span>
          )}
          </div>
          <div>
        <label>Manager:</label>
          {editing ? (
            <input
              type="text"
              name="manager"
              value={employeeData.manager}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.manager}</span>
          )}
          </div>
      </div>
      
      <div className="button-container">
        {editing ? (
          <>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleEditToggle}>Cancel</Button>
          </>
        ) : (
          <Button onClick={handleEditToggle}>Edit</Button>
        )}
      </div>
    </div>
    </div>
  );
};

export default EmployeeProfile;
