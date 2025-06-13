import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomeLayout, DashboardLayout ,Landing} from "./pages";
import { Login, Register } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>This is About page open now</h1>
        <h1>What are you thinking today</h1>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/landing",
    element: <Landing/>
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard" ,
    element: <DashboardLayout />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
