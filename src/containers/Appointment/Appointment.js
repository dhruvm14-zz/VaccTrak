import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Appointment() {
  const [hospitals, sethospitals] = useState([]);
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
    data: {},
  });

  const handleChange = (event) => {
    setState(hospitals[event.target.value]);
  };

  useEffect(() => {
    const getData = async () => {
      const response = db.collection("hospitals");
      const data = await response.get();
      const snap = await response.onSnapshot((snapshot) => {
        let hospiData = [];
        snapshot.forEach((doc) => {
          let hospi = {
            id: doc.id,
            data: doc.data(),
          };
          hospiData.push(hospi);
        });
        sethospitals(hospiData);
      });
    };
    getData();
    console.log(hospitals);
  }, []);
  return (
    <div>
      <h1>BOOK YOU SLOT</h1>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">HOSPITAL</InputLabel>
        <Select native value={state.age} onChange={handleChange}>
          <option aria-label="None" value="" />
          {hospitals &&
            hospitals.map((hospi, index) => (
              <option value={index}>{hospi.data.name}</option>
            ))}
        </Select>
      </FormControl>
      {state && <h1>Covishield : {state.data.covishield}</h1>}
    </div>
  );
}

export default Appointment;
