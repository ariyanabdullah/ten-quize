 
  export const LoaderData= async()=>{
    
    const data= await fetch('https://openapi.programming-hero.com/api/quiz')
    const subjects=await data.json()

 
     
    return subjects;


  }

 