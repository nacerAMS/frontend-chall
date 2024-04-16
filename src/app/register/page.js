"use client"
import React, { useState } from 'react';
import './../style.css';
import { useRouter } from 'next/navigation';


export default function Register() {

    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('User registered successfully');
                router.push("/details")
            } else {
                console.error('Failed to register user');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="formContainer container">
            <form onSubmit={handleSubmit}>
                <div className="formInner">
                    <div className="top">
                        <h3>Register</h3>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">Email:</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">Username:</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Create Username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">Password:</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="primary-btn change-btn" type="submit">
                        Register
                    </button>
                    <h3> already have account ...
                    <a href="/login">Go to login</a></h3>
                </div>
            </form>
        </div>
    );
}
