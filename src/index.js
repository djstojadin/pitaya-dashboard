import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
