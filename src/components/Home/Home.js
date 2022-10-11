import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../../Layout/Main';
import './Home.css'
import Subject from './Subject';

const Home = () => {

    const subjects=useContext(mainContext)
    // console.log(subjects);


    return (
        <div>
          {/* banner section */}
          <section>
      <div className="home bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
            Welcome To Ten Quize 
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
            Best E-learning platform for web Developer .
            Here a lots of Quize will help you in Your interview
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/statics">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
              >
               Statics
              </button>
            </Link>
            <Link to="/blog">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-white"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      
         </section>
         
      <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-md  sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
            subjects.map(s=> <Subject key={s.id} sub={s}> </Subject>)
        }

      </div>

      </div>
       
 
      </section>

        </div>
    );
};

export default Home;