import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   // Handle login using backend authentication
   const onLogin = async () => {
      const res = await api.post("/auth/login", { email, password });
      dispatch(loginSuccess(res.data)); // { user, token }
      navigate("/dashboard");
   };

   return (
      <Stack spacing={2}>
         <Typography variant="h4" fontWeight={700}>
            Login
         </Typography>
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
         <Button variant="contained" onClick={onLogin}>
            Login
         </Button>
      </Stack>
   );
}
