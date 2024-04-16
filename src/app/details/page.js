"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './../style.css';


export default function details() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        birthday:'',
        height: '',
         weight: '',
         interestions: []

    });
    const [newInterest, setNewInterest] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddInterest = () => {
        if (newInterest.trim() !== '') {
          setFormData(prevState => ({
            ...prevState,
            interestions: [...prevState.interestions, newInterest.trim()]
          }));
          setNewInterest('');
        }
      };
    
      const handleRemoveInterest = (index) => {
        setFormData(prevState => ({
          ...prevState,
          interestions: prevState.interestions.filter((_, i) => i !== index)
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault(); try {
            const response = await fetch('/api/createProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                router.push("/profile")
            } else {
                console.error('Failed to create profile at details');
            }
        } catch (error) {
            console.error( error);
        }}
    
   
    return (
        <div className="formContainer container">
            <form onSubmit={handleSubmit}>
                <div className="formInner">
                    <div className="top">
                        <h3>Details</h3>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">name:</label>
                            <input
                                name="name"
                                type="name"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">birthday:</label>
                            <input
                                name="birthday"
                                type="text"
                                placeholder=" enster birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">height:</label>
                            <input
                                name="height"
                                type="number"
                                placeholder="add height"
                                value={formData.height}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="inputWrapper">
                        <div className="inputField">
                            <label className="active">weight:</label>
                            <input
                                name="weight"
                                type="number"
                                placeholder="add weight"
                                value={formData.weight}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    
                    <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Enter interest"
          className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-blue-500 flex-grow"
        />
        <button onClick={handleAddInterest} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none">
          Add Interest
        </button>
      </div>
                
                <div className="mb-4 flex-col gap-4">
        <div className="flex flex-wrap">
          {formData.interestions.map((interest, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-2 mr-2 mb-2">
              <span>{interest}</span>
              <button onClick={() => handleRemoveInterest(index)} className="text-red-500 hover:text-red-700 focus:outline-none ml-2">
                Remove
              </button>
            </div>
          ))}
        </div>
     
                    <button className="primary-btn change-btn" type="submit">
                        submit
                    </button>
                </div>
            </form>
        </div>
     
        )
            
}
