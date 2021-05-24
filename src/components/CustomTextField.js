import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label, xs, sm }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={xs} sm={sm}>
      <Controller
        render={({
          field,
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField {...field} label={label} fullWidth />}
        control={control}
        fullWidth
        name={name}
        rules={{ required: true }}
      />
    </Grid>
  );
}

export default FormInput;
