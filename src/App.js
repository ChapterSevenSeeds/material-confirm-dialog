import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { useConfirmDialog } from "./lib/Context";
import { DialogResult } from "./lib/Enums";

function App() {
    const [clicked, setClicked] = useState('');
    const { showDialog } = useConfirmDialog();

    async function clickMe() {
        setClicked(await showDialog() === DialogResult.Confirm ? 'Confirm' : 'Cancel')
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <Button onClick={clickMe} variant='contained' color='primary'>Click me!</Button>
                </Grid>
                <Grid item>
                    {clicked}
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
