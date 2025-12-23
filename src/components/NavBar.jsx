import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function NavBar() {
   const user = useSelector((state) => state.auth.user);
   const dispatch = useDispatch();

   return (
      <AppBar position="static" elevation={0}>
         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
               variant="h6"
               component={RouterLink}
               to="/"
               sx={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 700,
               }}
            >
               Internship Tracker
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
               <Button color="inherit" component={RouterLink} to="/internships">
                  Browse
               </Button>

               {/* If logged in, show Dashboard + Logout */}
               {user ? (
                  <>
                     <Button
                        color="inherit"
                        component={RouterLink}
                        to="/dashboard"
                     >
                        Dashboard
                     </Button>
                     <Button
                        color="inherit"
                        onClick={() => {
                           // Clears Redux + localStorage auth (your authSlice handles this)
                           dispatch(logout());
                        }}
                     >
                        Logout
                     </Button>
                  </>
               ) : (
                  /* If logged out, show Login + Sign Up */
                  <>
                     <Button color="inherit" component={RouterLink} to="/login">
                        Login
                     </Button>
                     <Button
                        variant="outlined"
                        color="inherit"
                        component={RouterLink}
                        to="/register"
                     >
                        Sign up
                     </Button>
                  </>
               )}
            </Box>
         </Toolbar>
      </AppBar>
   );
}
