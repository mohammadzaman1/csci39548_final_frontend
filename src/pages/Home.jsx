import { Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const navigate = useNavigate();

   return (
      <Stack spacing={2}>
         <Typography variant="h3" fontWeight={800}>
            Find internships. Track applications.
         </Typography>
         <Typography variant="body1">
            Browse new internships without an account. Create one to save and
            track your application status.
         </Typography>
         <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/internships")}
            sx={{ width: "fit-content" }}
         >
            Browse Internships
         </Button>
      </Stack>
   );
}
