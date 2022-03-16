import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import { routes } from './routes';
import './styles.scss'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {routes.map(([path, Element], i) => {
          return <Route key={i} path={path} element={<Element />} />
        })}
      </Routes>
    </Router>
  );
}

export default App;
// export default withAuthenticator(App);
