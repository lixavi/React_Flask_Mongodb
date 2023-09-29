import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            

            const response = axios.post('http://localhost:5000/api/save-data', formData)
            //const response = axios.post('http://172.19.0.4:5000/api/save-data', formData)
            console.log(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
