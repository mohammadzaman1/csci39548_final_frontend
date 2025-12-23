import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const onRegister = async () => {
      await api.post("/auth/register", { name, email, password });
      navigate("/login");
   };

   return (
      <Stack spacing={2}>
         <Typography variant="h4" fontWeight={700}>
            Sign Up
         </Typography>
         <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <Button variant="contained" onClick={onRegister}>
            Create account
         </Button>
      </Stack>
   );
}
