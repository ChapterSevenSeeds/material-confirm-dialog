import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { useState } from "react";
import { useConfirmDialog } from "./lib/Context";

function SubscribeDialog(props: { closeDialog: (data: string) => void }) {
    const [email, setEmail] = useState('');

    return (
        <>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.closeDialog('cancel')}>Cancel</Button>
                <Button onClick={() => props.closeDialog(email)}>Subscribe</Button>
            </DialogActions>
        </>
    );
}

function RadioDialog(props: { closeDialog: (data: string) => void }) {
    const [value, setValue] = useState('None');
    return (
        <>
            <DialogTitle>Phone Ringtone</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
                    {[
                        'None',
                        'Atria',
                        'Callisto',
                        'Dione',
                        'Ganymede',
                        'Hangouts Call',
                        'Luna',
                        'Oberon',
                        'Phobos',
                        'Pyxis',
                        'Sedna',
                        'Titania',
                        'Triton',
                        'Umbriel',
                    ].map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => props.closeDialog('cancel')}>
                    Cancel
                </Button>
                <Button onClick={() => props.closeDialog(value)}>Ok</Button>
            </DialogActions>
        </>
    );
}

function App() {
    const [data, setData] = useState<string>("");
    const { showDialog } = useConfirmDialog();

    async function subscribeDialog() {
        const result = await showDialog<string>(close => <SubscribeDialog closeDialog={close} />);

        setData(result);
    }

    async function radioDialog() {
        const result = await showDialog<string>(close => <RadioDialog closeDialog={close} />, close => ({ onClose: () => close('closed') }));

        setData(result);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <Button onClick={subscribeDialog} variant='contained' color='primary'>Show Subscribe Form</Button>
                </Grid>
                <Grid item>
                    <Button onClick={radioDialog} variant='contained' color='primary'>Show Subscribe Form</Button>
                </Grid>
                <Grid item>
                    Data: {data}
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
