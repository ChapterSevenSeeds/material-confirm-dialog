import App from './App';
import ConfirmDialogProvider from './lib/ConfirmDialogProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ConfirmDialogProvider>
            <App />
        </ConfirmDialogProvider>
    </React.StrictMode>
);
