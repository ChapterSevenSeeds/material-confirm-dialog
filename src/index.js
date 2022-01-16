import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ConfirmDialogProvider from './lib/ConfirmDialogProvider';

ReactDOM.render(
    <React.StrictMode>
        <ConfirmDialogProvider>
            <App />
        </ConfirmDialogProvider>
    </React.StrictMode>,
    document.getElementById('root')
);