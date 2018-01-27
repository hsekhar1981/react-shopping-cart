import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductList from './components/productlist';
//import Hello from './components/hello';
//import registerServiceWorker from './registerServiceWorker';
// const root = <div>
// <Hello firstName="Shaina" lastName="Biswal"/>
// <Hello firstName="Himanshu" lastName="Biswal"/>
// </div>;
ReactDOM.render(<ProductList/>, document.getElementById('root'));
//registerServiceWorker();
