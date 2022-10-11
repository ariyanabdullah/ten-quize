// import React from 'react';

// const Statics = () => {
//     return (
//         <div>
//             <h1>Statics page</h1>
//         </div>
//     );
// };

// 

import React, { useContext } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from "recharts";
import { mainContext } from "../../Layout/Main";

const Statics = () => {
   
  const subjects = useContext(mainContext)

  return (
    <div className=" w-[80%] mx-auto">
        <h1 className="text-2xl font-medium py-5 mb-5">All subjects Total  statistics</h1>
         
         <div className="flex align-center justify-center w-100 h-100">

         
        <LineChart className="helo" width={500} height={300} data={subjects}>
         <Line type="monotone" dataKey="total" stroke="#82ca9d" />
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis dataKey="total"/>
        <Tooltip />
        <Legend />
       </LineChart>
        

        


         </div>
      
    </div>
  );
};

export default Statics;