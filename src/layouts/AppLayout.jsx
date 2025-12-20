import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import NavBar from "../components/NavBar";

export default function AppLayout() {
   return (
      <Box>
         <NavBar />
         <Container maxWidth="md" sx={{ py: 4 }}>
            <Outlet />
         </Container>
      </Box>
   );
}
