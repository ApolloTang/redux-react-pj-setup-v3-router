import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// const isProduction = (process.env.NODE_ENV !== 'production');
const isProduction = true;

const middleware = [ thunk ];

if (isProduction) {
  middleware.push(createLogger())
}

export default middleware;

