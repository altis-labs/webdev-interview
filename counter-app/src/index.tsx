import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

/* Use destructuring instead of dot property notation in JSX tags */
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);