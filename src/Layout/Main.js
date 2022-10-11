import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

 export const mainContext=createContext()



const Main = () => {
    const subjects=useLoaderData()

    
    return (
     
    <mainContext.Provider value={subjects.data}>
          
          <div>
            <Header> </Header>
            <Outlet></Outlet>
        </div>
         
    </mainContext.Provider>
        
    );
};

export default Main;