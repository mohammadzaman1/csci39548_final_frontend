import { Card, CardContent, Typography, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { mockInternships } from "../services/mockInternships";

export default function Internships() {
   const [search, setSearch] = useState("");

   const filtered = mockInternships.filter(
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
                        <Typography variant="h6">{internship.title}</Typography>
                        <Typography color="text.secondary">
                           {internship.company} — {internship.location}
                        </Typography>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
}
