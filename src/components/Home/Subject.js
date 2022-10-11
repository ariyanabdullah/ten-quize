import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Subject = ({sub}) => {
     
   
     const {id,name,logo,total}=sub

    return (
        <div className='bg-gray-100 p-6 rounded shadow-lg'>
        
        <img src={logo} alt="" className="object-contain object-center w-full rounded-md h-72 " />
        <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
        
        <Link
          to={`quize/${id}`}
          type='button'
          className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
        >
          Start Practise
        </Link>
      </div>
    );
};

export default Subject;