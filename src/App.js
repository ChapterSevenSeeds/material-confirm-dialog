import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { useConfirmDialog } from "./lib/Context";
import { DialogResult } from "./lib/Enums";

function App() {
    const [clicked, setClicked] = useState('');
    const [data, setData] = useState(null);
    const { showDialog } = useConfirmDialog();

    async function clickMe() {
        const result = await showDialog({ data: 3 });
        setClicked(result.dialogResult === DialogResult.Confirm ? 'Confirm' : 'Cancel')
        setData(result.data);
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
                <Grid item>
                    {data}
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
