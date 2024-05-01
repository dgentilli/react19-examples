import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import './App.css';
import HomePage from './components/HomePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path='use-example-1' element={} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
