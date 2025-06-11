import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import HomeLayout from './pages/Homelayout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>
  },
  {
    path:'/about',
    element:(<div>
      <h1>This is About page open now</h1>
      <h1>What are you thinking today</h1>
      </div> )
  }
])
function App() {
  return <RouterProvider router = {router} />;
};

export default App;
