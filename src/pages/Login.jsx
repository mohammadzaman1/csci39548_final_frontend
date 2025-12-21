import { Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../store/authSlice";

export default function Login() {
   const dispatch = useDispatch();

   return (
      <Stack spacing={2}>
         <Typography variant="h4" fontWeight={700}>
            Login
         </Typography>

         <Button
            variant="contained"
            onClick={() =>
               dispatch(
                  loginSuccess({
                     user: {
                        id: 1,
                        name: "Test User",
                        email: "test@example.com",
                     },
                     token: "fake-jwt",
                  })
               )
            }
         >
            Fake Login (for now)
         </Button>

         <Button variant="outlined" onClick={() => dispatch(logout())}>
            Logout
         </Button>
      </Stack>
   );
}
