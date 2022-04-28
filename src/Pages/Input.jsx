import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import { addData } from "../store/action";

export default function Input() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  function changeInput(event) {
    let { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  function submit(e) {
    e.preventDefault();
    dispatch(addData(input, navigate));
  }

  return (
    <Container maxWidth="lg" sx={{ my: "30px" }}>
      <form onSubmit={submit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            value={input.name}
            onChange={changeInput}
            name="name"
          />
          <TextField
            label="Email"
            value={input.email}
            onChange={changeInput}
            name="email"
          />
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              value={input.gender}
              name="gender"
              onChange={changeInput}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Age</InputLabel>
            <Select
              label="Status"
              value={input.status}
              name="status"
              onChange={changeInput}
            >
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex">
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              Submit
            </Button>
            <Button
              sx={{ ml: "12px" }}
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Box>
        </Stack>
      </form>
    </Container>
  );
}
