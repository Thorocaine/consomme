import React from 'react';
import ReactDOM from 'react-dom';
import Div from './Div';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Div />, div);
  ReactDOM.unmountComponentAtNode(div);
});
