import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div className='w-[60%] px-5 py-9 mx-auto shadow-xl rounded-lg'>
               <h1 className='text-3xl font-semibold my-5'> 1. What is the purpose of React Router?</h1> 
               <p className='text-md  font-semibold'>= React Router is a standard library for routing in React. <br/> It enables the navigation among views of various components in a React Application,<br/>  allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
          {/* second box */}
            <div  className='w-[60%] px-5 py-9 mx-auto shadow-xl rounded-lg my-7'>
               <h1 className='text-3xl font-semibold my-5'> 2. How does Context API works ?</h1> 
               <p className='text-md  font-semibold'>
                =React.createContext() is all you need.  It returns a consumer and a provider. <br/> Provider is a component that as it's names suggests provides the state to its children.<br/>  It will hold the "store" and be the parent of all the components that might need that store.<br/>  Consumer as it so happens is a component that consumes and uses the state.
               </p>
            </div>

            {/* Third box */}

            <div >
               <h1 > 3. Details About UseRef Hook  ?</h1> 

               <p>
                =useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br/>
                However, useRef() is useful for more than the ref attribute.
                This works because useRef() creates a plain JavaScript object.
               </p>
               
            </div>



        </div>
    );
};

export default Blog;