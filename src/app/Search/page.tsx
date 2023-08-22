import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";




export default function page() {
  return (
     <section>
        <FormControl >
           <InputLabel id="demo-simple-select-label">Action</InputLabel>
           <Select
              labelId="demo-simple-select-label" label="Mode"
           >
              <MenuItem value={10}>Sell</MenuItem>
              <MenuItem value={20}>Add</MenuItem>
              <MenuItem value={30}>Return</MenuItem>
           </Select>
        </FormControl>
     </section>
  );
}