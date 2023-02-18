import Context, { DialogChild, RootProps } from './Context';
import { Dialog } from '@mui/material';
import { useState } from 'react';

export default function ConfirmDialogProvider(props: { children: React.ReactNode }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [component, setComponent] = useState<React.ReactNode>(null);
    const [dialogProps, setDialogProps] = useState<ReturnType<RootProps<any>>>();

    function showDialog<T = {}>(dialogChildren: DialogChild<T>, dialogProps?: RootProps<T>): Promise<T> {
        return new Promise<T>(res => {
            function closeDialog(data: T) {
                setDialogOpen(false);
                res(data);
            }
            setComponent(dialogChildren(closeDialog));
            setDialogProps(dialogProps?.(closeDialog));
            setDialogOpen(true);
        });
    }

    return (
        <Context.Provider value={{ showDialog }}>
            {props.children}
            <Dialog {...dialogProps} open={dialogOpen}>
                {component}
            </Dialog>
        </Context.Provider>
    );
}