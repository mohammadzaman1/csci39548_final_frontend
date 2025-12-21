import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";


export default function NavBar() {

    const user = useSelector((state) => state.auth.user);

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
                {/* Temp to see if logged in or not */}
               <Typography variant="body2" sx={{ mr: 2 }}>
                  {user ? `Hi, ${user.name}` : "Not logged in"}
               </Typography>

               <Button color="inherit" component={RouterLink} to="/internships">
                  Browse
               </Button>
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
            </Box>
         </Toolbar>
      </AppBar>
   );
}
