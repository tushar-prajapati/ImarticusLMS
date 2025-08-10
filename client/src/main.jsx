import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import Course from './pages/Course/Course.jsx';
import { createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<App/>}>
    <Route path='/' element={<Course/>}/>

  </Route>)
)

createRoot(document.getElementById('root')).render(
<Provider store={store}>
<RouterProvider router={router} />
</Provider>
)
