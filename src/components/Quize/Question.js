import React from 'react';
import { useState } from 'react';
import Option from './Option';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Question = ({questions,notify}) => {
        const{question,options,correctAnswer}=questions

       


           const textHandler=event=>{
            const warning = 'Wow! Correct Answer'
            const warningTwo = 'Your Answer is Wrong. The currect Answer is' + " : " + correctAnswer
            if(event === correctAnswer){
              notify(warning)
            }else{
              notify(warningTwo)
            }
     
          }
       
   
    return (
    
         
         
         <div className=' relative px-[5%] py-7 sm:w-[100%] md:w-[100%] h-auto mx-0 my-9   rounded-lg shadow-lg'>
           <span onClick={()=>notify(correctAnswer)} className='absolute right-10 top-0 text-cyan-600'> <FontAwesomeIcon icon={faEye} /></span>
          <h1 className='text-2xl sm:text-xl'> Quiz:{question}?</h1> <br />
          <div className='grid md:grid-cols-2 gap-3'>{options.map(o=>

           <div className='flex   items-center bg-cyan-500 text-white px-4 rounded-xl py-3'>
             <input  onClick={(event)=>textHandler(event.target.value)} type="radio" name='he' id={o} value={o} /> 
            <label className='font-semibold' htmlFor='he'>{o}</label></div>
            )}</div>
         

         </div>


         
   
    );
};

export default Question;