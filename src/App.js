import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import Nulla from './pages/Nulla';
import Malintenzionato from './pages/Malintenzionato';
import Fuga from './pages/Fuga';
import Attacchi from './pages/Attacchi';

const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/nulla', element:<Nulla/>},
  {path:'/malintenzionato', element:<Malintenzionato/>},
  {path:'/fuga', element:<Fuga/>},
  {path:'/attachi', element:<Attacchi/>},
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

