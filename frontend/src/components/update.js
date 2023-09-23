import React, { useState } from 'react';
import axios from 'axios';
import './update.css';

function MedicineForm1() {
  const [formData, setFormData] = useState({
    id:'',
    name:'',
    email:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8183/api/v1/user/updateUser/${formData.id}`, formData)
    console.log(formData);
    setFormData({
        id:'',
        name:'',
        email:''
    });
  };

  return (
    <div className='fhj'>
    <div className="vis">
    
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineName">
            ID:
          </label>
          <input
            type="text"
            id="medicineName"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineName">
             Name:
          </label>
          <input
            type="text"
            id="medicineName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineCost" >
            email:
          </label>
          <input
            type="text"
            id="medicineCost"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
       
        <div className="sl">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
           update details
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default MedicineForm1;
