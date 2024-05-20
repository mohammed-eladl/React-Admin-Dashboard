import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
const regEmail =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneNumber =
  /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

export const From = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("Doneeeeeeeeeee");
    handleClick()
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
  <Box>
   <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "90%",
          mx: "auto",
          mt: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.firstName)
                ? "This Field is Required & min 3 Chart"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Frist Name"
            variant="filled"
          />
    
          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.lastName)
                ? "This Field is Required & min 3 Chart"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>
    
        <TextField
          error={Boolean(errors.email)}
        
          helperText={
            // eslint-disable-next-line no-extra-boolean-cast
            Boolean(errors.email) ? "please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />
    
        <TextField
          error={Boolean(errors.phoneNumber)}
          
          helperText={
            // eslint-disable-next-line no-extra-boolean-cast
            Boolean(errors.phoneNumber)
              ? "Please provide a valid phone Number"
              : null
          }
          {...register("phoneNumber", { required: true, pattern: phoneNumber })}
          label="Contact Number"
          variant="filled"
        />
    
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 1" variant="filled" />
    
        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
        <Box sx={{ textAlign: "end" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>
        </Box>
    
    
        {/*  AlERT  SNACKBAr */}
        <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          account created successfully
          </Alert>
        </Snackbar>
      </Box>
  </Box>
  );
};
