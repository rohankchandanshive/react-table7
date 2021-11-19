import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import HidingCols from './components/HidingCols';
import reportWebVitals from './reportWebVitals';
import RowSelection from './RowSelection'

const HidingColsComp = React.memo(HidingCols); 

ReactDOM.render(
    // <App />
    <>
    {/* <RowSelection /> */}
    <HidingColsComp/>
    </>
    
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
