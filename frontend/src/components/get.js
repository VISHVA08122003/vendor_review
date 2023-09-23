import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './get.css';

const MedcineList = () => {
  
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Fetch user details from the Spring Boot API when the component mounts
    axios.get('http://localhost:8183/api/v1/user/getUser')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data); // Set the retrieved user data in the state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        // Handle the error (e.g., show an error message)
      });
  }, []);
 


  return (
    <div className="user-table">
      <h2>User Details Table</h2>
      <div className='xac'>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      </div>
      
      {showDetails && (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MedcineList;