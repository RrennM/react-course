import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Popular from './components/Popular.component';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)