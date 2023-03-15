import './App.css';

import { useRoutes } from 'react-router-dom';
import routes from './router/routes';

import TopNav from './components/topNav/topNav';

function App() {
  const Routes = useRoutes(routes)
  return (
    <div className="App">
      <TopNav />
      {Routes}
    </div>
  );
}

export default App;
