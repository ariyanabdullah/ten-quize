
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error'
import { LoaderData } from './Utiliities/Utilities';
import Quize from './components/Quize/Quize';


function App() {

    const router=createBrowserRouter([
      {path:'/',element:<Main></Main>,
      loader:LoaderData,
        
      children:[
        {path:'/',element:<Home></Home>},
        {path:'/statics',element:<Statics></Statics>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/quize/:getId',
        loader:({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.getId}`)
        },
        element:<Quize></Quize>,
       
       }
      ]
    
    
    },
    {path:'*',element:<Error></Error>},
    ])
  return (
    <div className="App">
     
     <RouterProvider router={router}> </RouterProvider>

    </div>
  );
}

export default App;
