declare module 'material-confirm-dialog' {
    import React from 'react';

    interface ConfirmDialogProviderDefaultProps {
        title: String,
        body: React.ReactNode,
        confirmText: React.ReactNode,
        cancelText: React.ReactNode,
        confirmProps: {
            color: String,
            variant: String
        },
        cancelProps: {
            color: String,
            variant: String
        },
        autoClose: Boolean
    }

    interface ConfirmDialogProviderProps {
        defaults: ConfirmDialogProviderDefaultProps
    }


    const ConfirmDialogProvider: React.FC<ConfirmDialogProviderProps>;

    export default ConfirmDialogProvider;

    export interface DialogResult {
        Confirm: 0,
        Cancel: 1
    }

    interface ShowDialogReturnValue {
        dialogResult: DialogResult,
        data: any
    }

    interface ShowDialogOptions {
        title: String,
        body: React.ReactNode,
        confirmText: React.ReactNode,
        cancelText: React.ReactNode,
        confirmProps: {
            color: String,
            variant: String
        },
        cancelProps: {
            color: String,
            variant: String
        },
        autoClose: Boolean,
        data: any
    }

    interface UseConfirmDialogReturn {
        showDialog(options: ShowDialogOptions): Promise<ShowDialogReturnValue>,
        closeDialog(): null
    }

    export function useConfirmDialog(): UseConfirmDialogReturn
}
