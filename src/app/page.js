"use client"
import React from 'react';
import './style.css';

export default function Home() {


  return (
      <div className="container mt-4">
        <div class="flex flex-col items-center"> 
                  <div className="top mb-4">
                      <h3>Welcome to Hobby</h3>
                  </div> 
                  <a href='/login'>
                  <button  className="primary-btn change-btn " type="submit">
                      get Started
                  </button></a>
            </div>
          
      </div>
  );
}