import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <RootLayout />,
      children: [
        {
          path: '/', 
          element:<Home />
        }, 
        {
          path: '/sign-in',
          element:<SignIn />
        },
        {
          path: '/sign-up',
          element:<Signup />
        },
        {
          path: '/about',
          element:<About />
        },
        {
          path: '/profile',
          element:<Profile />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App