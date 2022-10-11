import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { idContext } from '../../Layout/Main';
import Question from './Question';
import { ToastContainer, toast } from 'react-toastify';
const Quize = () => {
   
    const allquize=useLoaderData()
    const {data}=allquize;
    const {name,questions}=data
    // console.log(allquize.data);
      
  
    
      
    // tost 
    
    const notify = (ans) => toast(ans);

   
      
    return (
        <div className='my-10'> 

        <div>
            <ToastContainer/>
        </div>
        <h1 className='text-4xl  font-bold'>Quize of {name} </h1>
         <div className='w-[60%] mx-auto'>
            {
                questions.map(q=><Question  notify={notify}  key={q.id} num={questions}  questions={q}> </Question>)
            }
         </div>
        </div>
    );
};

export default Quize;