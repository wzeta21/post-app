import React, { Component } from 'react';
import logo from './../../logo.svg';
import './App.css';
import { DataTable } from '../../components/index';

const templateFuncion = (a) => a;

const columns = [
  {'field': 'id', 'label': 'Code', 'template': templateFuncion},
  {'field': 'name', 'label': 'Name', 'template': templateFuncion},
  {'field': 'lastname', 'label': 'Last name', 'template': templateFuncion},
  {'field': 'nick', 'label': 'Nick name', 'template': templateFuncion},
];

const rows = [
  {
  'id': 100,
  'name':'Luis Carlos',
  'lastname': 'Prestes',
  'nick': 'carlinho',
  '1': 'cell 1'
},
{
  'id': 200,
  'name':'Nossa senhora',
  'lastname': 'da Aprecida',
  'nick': 'Cida',
  '1': 'cell 1'
}
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
                  
            Learn React
            <DataTable columns ={columns} rows={rows}/>
        </header>
      </div>
    );
  }
}

export default App;
