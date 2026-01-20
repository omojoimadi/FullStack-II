import { FormControl, InputLabel, MenuItem, Select as MuiSelect} from '@mui/material';

export default function Select() {
    return (
        <FormControl>
        <InputLabel>Age</InputLabel>
        <MuiSelect defaultValue="">
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={21}>21</MenuItem>
        </MuiSelect>
        </FormControl>
    );
}
