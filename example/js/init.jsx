'use strict';

import React from 'react';
import App from './app';

let appWrapperEl = document.getElementById('app-wrapper'),
  loadApp = e => React.render(<App />, appWrapperEl);
  
document.addEventListener('DOMContentLoaded', loadApp);