import { createContext, useContext } from 'react';
import { DialogProps } from '@mui/material';

export type DialogChild<T> = (closeDialog: (data: T) => void) => React.ReactNode;
export type RootProps<T> = (closeDialog: (data: T) => void) => Omit<DialogProps, "open">;

const context = createContext({
    showDialog: async <T = {}>(dialogChildren: DialogChild<T>, dialogProps?: RootProps<T>): Promise<T> => {
        return undefined as any;
    },
});

export default context;

export function useConfirmDialog() {
    return useContext(context);
}