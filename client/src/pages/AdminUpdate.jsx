import React, { useState } from 'react';
import { useAuth } from "../store/auth";
import { useParams } from 'react-router-dom';

const AdminUpdateuser = () => {
    const {user} = useAuth();

   
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        phone: user.phone
    });

    const params = useParams();
    console.log(params);
    const {authorizationToken} = useAuth();

    const handleInput = (e) => {
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
  
      setFormData({
        ...user,
        [name]: value,
      })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
            method: "PUT",
            headers: {
              Authorization:authorizationToken,
            },
            body: JSON.stringify(formData),
          });
          const res_data = await response.json();
          console.log(res_data);
          
        } catch (error) {
          console.log(error)
          
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleInput} style={{ marginLeft: '10px' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInput} style={{ marginLeft: '10px' }} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleInput} style={{ marginLeft: '10px' }} />
            </label>
            <button type="submit" style={{ display: 'block', margin: '0 auto', backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', border: 'none' }}>Update</button>
        </form>
    );
};

export default AdminUpdateuser;
