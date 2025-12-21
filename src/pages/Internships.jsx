import {
   Card,
   CardContent,
   Typography,
   Grid,
   TextField,
   Button,
   Stack,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addApplication } from "../store/applicationsSlice";
import { Snackbar, Alert } from "@mui/material";


export default function Internships() {
   const [search, setSearch] = useState("");
   const dispatch = useDispatch();

   const internships = useSelector((state) => state.internships.items);
   const user = useSelector((state) => state.auth.user);

   const apps = useSelector((state) => state.applications.items);
   console.log("apps:", apps);

    const [open, setOpen] = useState(false);

   // TEMP DEBUG (remove later)
   console.log("auth user in internships:", user);

   const filtered = internships.filter(
      (i) =>
         i.company.toLowerCase().includes(search.toLowerCase()) ||
         i.location.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <>
         <Typography variant="h4" fontWeight={700} gutterBottom>
            Browse Internships
         </Typography>

         <TextField
            label="Filter by company or location"
            fullWidth
            sx={{ mb: 3 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />

         <Grid container spacing={2}>
            {filtered.map((internship) => (
               <Grid item xs={12} key={internship.id}>
                  <Card>
                     <CardContent>
                        <Stack
                           direction="row"
                           justifyContent="space-between"
                           alignItems="center"
                           gap={2}
                        >
                           <div>
                              <Typography variant="h6">
                                 {internship.title}
                              </Typography>
                              <Typography color="text.secondary">
                                 {internship.company} — {internship.location}
                              </Typography>
                           </div>

                           <Button
                              variant="contained"
                              disabled={!user}
                              onClick={() => {
                                 dispatch(
                                    addApplication({
                                       internshipId: internship.id,
                                       title: internship.title,
                                       company: internship.company,
                                       location: internship.location,
                                       status: "Saved",
                                    })
                                 );
                                 setOpen(true);
                              }}
                           >
                              Save / Track
                           </Button>
                        </Stack>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
         <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
         >
            <Alert severity="success" onClose={() => setOpen(false)}>
               Saved to Dashboard
            </Alert>
         </Snackbar>
      </>
   );
}
