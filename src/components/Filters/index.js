import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const Filters = () => {
    return (
        <div>
        <FormControlLabel
          control={
            <Switch name="gilad" />
          }
          label="Gilad Gray"
        />
        </div>
    )
}

export default Filters;
