import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../store/action";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const head = ["No", "Name", "Email", "Gender", "Status", "Action"];

export default function Index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.data.users);

  const addUser = () => {
    navigate("/add");
  };

  useEffect(() => {
    if (!users) {
      dispatch(getData());
    }
  }, []);

  function deldata(id) {
    dispatch(deleteData(id));
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ py: "30px" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>List of Users</Typography>
          <Button variant="contained" onClick={addUser}>
            Add User
          </Button>
        </Box>
        <Paper sx={{ p: "20px", mt: "20px" }}>
          <Table>
            <TableHead>
              {head.map((e, i) => (
                <TableCell key={i}>{e}</TableCell>
              ))}
            </TableHead>
            <TableBody>
              {users &&
                users.map((user, i) => (
                  <TableRow>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={() => deldata(user.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
}
