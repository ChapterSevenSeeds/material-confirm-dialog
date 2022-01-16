import { createContext, useContext } from "react";

const context = createContext({
    showDialog: (options) => {}
});

export default context;

export function useConfirmDialog() {
    return useContext(context);
}