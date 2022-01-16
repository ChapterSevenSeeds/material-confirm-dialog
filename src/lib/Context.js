import { createContext, useContext } from "react";

const context = createContext({
    /**
     * Shows the dialog.
     * @param {{ title: String, body: ReactNode, confirmText: ReactNode, cancelText: ReactNode, confirmProps: { color: String, variant: String }, cancelProps: { color: String, variant: String } }} options Specific options for this instance of the dialog.
     * @returns {Promise<DialogResult>} The dialog result wrapped in a promise. 
     */
    showDialog: (options = null) => {}
});

export default context;

export function useConfirmDialog() {
    return useContext(context);
}