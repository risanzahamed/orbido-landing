import { RouterProvider } from 'react-router-dom';
import router from './Layout/Main';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
