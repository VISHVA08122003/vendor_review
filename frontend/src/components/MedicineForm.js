import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

function MedicineForm() {
  const [formData, setFormData] = useState({
    productName: '',
    cost: '',
   quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with Axios
      const response = await axios.post('http://localhost:8183/api/v1/user/product', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="v">
    
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineName">
            Participant Name:
          </label>
          <input
            type="text"
            id="medicineName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineCost" >
            Ticket amount:
          </label>
          <input
            type="text"
            id="medicineCost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineQuantity">
            Participant count:
          </label>
          <input
            type="text"
            id="medicineQuantity"
            name="quantity"
            value={formData.quantity}
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
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicineForm;
