import {React} from 'react'
import reactDom from 'react-dom';
import CounterApp from './CounterApp'
//import PrimeraApp from './PrimeraApp'
import './index.css';

const divRoot = document.querySelector('#root');

//reactDom.render(<PrimeraApp saludos="Hola Soy Allan"/>, divRoot);

reactDom.render(<CounterApp  value={20} />, divRoot);