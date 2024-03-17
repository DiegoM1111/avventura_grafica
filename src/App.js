import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import Nulla from './pages/Nulla';
import Malintenzionato from './pages/Malintenzionato';
import Fuga from './pages/Fuga';
import Attacchi from './pages/Attacchi';
import Vittoria from './pages/Vittoria';
import Morte from './pages/Morte';

const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/nulla', element:<Nulla/>},
  {path:'/malintenzionato', element:<Malintenzionato/>},
  {path:'/fuga', element:<Fuga/>},
  {path:'/attacchi', element:<Attacchi/>},
  {path:'/vittoria', element:<Vittoria/>},
  {path:'/morte', element:<Morte/>},
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

