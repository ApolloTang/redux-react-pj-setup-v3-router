import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const PROD = (process && process.env && process.env.PROD) ? true : false;

const middleware = [ thunk ];

if (PROD) {
} else {
    middleware.push(
        createLogger()
    )
}

export default middleware;

