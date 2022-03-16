import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss';
import '@aws-amplify/ui-react/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { RecoilRoot } from 'recoil'
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
