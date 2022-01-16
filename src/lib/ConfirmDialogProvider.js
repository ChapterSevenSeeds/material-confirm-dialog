import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';
import { useRef, useState } from 'react';
import Context from './Context';
import { DialogResult } from './Enums';

export default function ConfirmDialogProvider(props) {
    const { defaults = {
        title: 'Are you sure?',
        body: 'Are you sure you want to proceed?',
        confirmText: 'Yes',
        cancelText: 'No',
        confirmProps: {
            color: 'primary',
            variant: 'contained'
        },
        cancelProps: {
            color: 'secondary',
            variant: 'outlined'
        }
    } } = props;

    const [dialogOpen, setDialogOpen] = useState(false);
    const options = useRef(defaults);
    const resolve = useRef();

    function showDialog(newOptions) {
        Object.assign(options.current, newOptions);
        setDialogOpen(true);
        return new Promise(res => resolve.current = res);
    }

    function onConfirm() {
        setDialogOpen(false);
        
        resolve.current(DialogResult.Confirm);
    }

    function onCancel() {
        setDialogOpen(false);
        
        resolve.current(DialogResult.Cancel);
    }

    return (
        <Context.Provider value={{ showDialog }}>
            {props.children}
            <Dialog open={dialogOpen}>
                <DialogTitle>{options.current.title}</DialogTitle>
                <DialogContent>{options.current.body}</DialogContent>
                <DialogActions>
                    <Button onClick={onConfirm} {...options.current.confirmProps}>{options.current.confirmText}</Button>
                    <Button onClick={onCancel} {...options.current.cancelProps}>{options.current.cancelText}</Button>
                </DialogActions>
            </Dialog>
        </Context.Provider>
    );
}