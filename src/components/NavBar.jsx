import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
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
