import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomeLayout, DashboardLayout, Landing, Error, AddJob, AllJobs, Profile, Admin } from "./pages";
import { Login, Register } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob/>
          },
          { 
            path:'all-jobs',
            element: <AllJobs/>
          },
          {
            path:'profile',
            element: <Profile/>
          },
          {
            path: 'admin',
            element: <Admin/>
          }
        ]
      },
    ],
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
