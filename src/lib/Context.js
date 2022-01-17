import { createContext, useContext } from "react";

const context = createContext({
    /**
     * Shows the dialog.
     * @param {{ title: String, body: ReactNode, confirmText: ReactNode, cancelText: ReactNode, confirmProps: { color: String, variant: String }, cancelProps: { color: String, variant: String }, autoClose: Boolean, data: any }} options Specific options for this instance of the dialog.
     * @returns {Promise<{ dialogResult: DialogResult, data: any }>} The dialog result wrapped in a promise. 
     */
    showDialog: (options = null) => {},
    /**
     * Closes the dialog.
     */
    closeDialog: () => {}
});

export default context;

export function useConfirmDialog() {
    return useContext(context);
}