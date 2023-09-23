import React, { useState } from 'react';
import axios from 'axios';
import './delete.css';

function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a DELETE request with Axios
      const response = await axios.delete(`http://localhost:8183/api/v1/user/deleteUser/${userId}`);

      if (response.status === 204) {
        setMessage(`User with ID ${userId} has been deleted successfully.`);
      } else {
        setMessage(`User deletion failed. Status code: ${response.status}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
    setUserId("");
  };

  return (
    <div className="glo">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Delete User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block">
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={userId}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="ms">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete User
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
}

export default DeleteUser;
