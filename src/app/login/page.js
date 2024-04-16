"use client"
import React, { useState } from 'react';
import './../style.css';
import { useRouter } from 'next/navigation';




export default function Login() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '', password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
       setFormData((prevState) => ({...prevState,[name]: value
           }));
       };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('User logged in successfully');
                router.push("/details")
            } else {
                console.error('Failed to login user');
            }
        } catch (error) {
            console.error('Error logging in user:', error);
        }
        localStorage.setItem("formData", formData)
    };
        
   

    return (
        <div className="formContainer container">
            <form onSubmit={handleSubmit}>
                <div className="formInner">
                    <div className="top">
                        <h3>Login</h3>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">Email:</label>
                            <input name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">Password:</label>
                            <input name="password" type="password" placeholder="Create Password" value={formData.password} onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="primary-btn change-btn" type="submit">
                        Log in
                    </button>
                    <h3> don't you  have account ...
                    <a href="/register">Go to register</a></h3>
                    
                </div>
            </form>
        </div>
    );
}
