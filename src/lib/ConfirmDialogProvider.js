import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import Context from './Context';
import { DialogResult } from './Enums';
import { mergeLeft } from './Utils';

export default function ConfirmDialogProvider(props) {
    const { defaults } = props;

    const [dialogOpen, setDialogOpen] = useState(false);
    const storedDefaults = useRef({
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
        },
        autoClose: true
    })
    const options = useRef(storedDefaults.current);
    const resolve = useRef();
    const callbackData = useRef(null);

    useEffect(() => {
        if (defaults != null) {
            mergeLeft(storedDefaults.current, defaults);
        }
    }, [defaults]);

    function showDialog(newOptions) {
        if (typeof(newOptions) === 'object') {
            const clone = { ...newOptions };
            callbackData.current = clone.data;
            delete clone.data;
            options.current = storedDefaults.current;
            mergeLeft(options.current, clone);
        }

        setDialogOpen(true);

        return new Promise(res => resolve.current = res);
    }

    function closeDialog() {
        setDialogOpen(false);
    }

    function onConfirm() {
        setDialogOpen(!options.current.autoClose);

        resolve.current({ dialogResult: DialogResult.Confirm, data: callbackData.current });
    }

    function onCancel() {
        setDialogOpen(!options.current.autoClose);

        resolve.current({ dialogResult: DialogResult.Cancel, data: callbackData.current });
    }

    return (
        <Context.Provider value={{ showDialog, closeDialog }}>
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