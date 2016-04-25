import Timer from './Timer';
import React from 'react';
import { render } from 'react-dom';

import Pack from './Pack';

render(
  <Timer />,
  document.getElementById('app')
)

render(
  <Pack />,
  document.getElementById('packs')
)