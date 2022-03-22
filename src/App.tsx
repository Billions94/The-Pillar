import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { darkModeState } from './components/atoms';
import NavBar from './components/navbar/NavBar';
import { routes } from './routes';
import './styles.scss'

function App() {

  const darkMode = useRecoilValue(darkModeState)
  const check: boolean = darkMode === false

  return (
    <Router>
      <NavBar />
      <div id='app'>
        <div className={check ? 'light' : 'dark'}>
          <Routes>
            {routes.map(([path, Element], i) => {
              return <Route key={i} path={path} element={<Element />} />
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// export default App;
export default withAuthenticator(App);
