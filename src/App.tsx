import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes';
import './styles.scss'

function App() {
  return (
    <Router>
      <Routes>
        { routes.map(([path, Element], idx) => {
          return <Route key={idx} path={path} element={Element}/>
        })}
      </Routes>
    </Router>
  );
}

export default App;
