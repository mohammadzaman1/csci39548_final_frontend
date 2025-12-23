import {
   Typography,
   Stack,
   Card,
   CardContent,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import api from "../services/api";
import { setApplications } from "../store/applicationsSlice";

const statuses = ["Saved", "Applied", "Interview", "Offer", "Rejected"];

export default function Dashboard() {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user);
   const apps = useSelector((state) => state.applications.items);

   const load = async () => {
      const res = await api.get("/applications");
      dispatch(setApplications(res.data));
   };

   useEffect(() => {
      if (user) load();
   }, [user]);

   if (!user) {
      return <Typography>Please log in to view your dashboard.</Typography>;
   }

   return (
      <Stack spacing={2}>
         <Typography variant="h4" fontWeight={700}>
            My Applications
         </Typography>

         {apps.length === 0 ? (
            <Typography color="text.secondary">
               Nothing saved yet. Go to Browse and click “Save / Track”.
            </Typography>
         ) : (
            apps.map((app) => (
               <Card key={app.internshipId}>
                  <CardContent>
                     <Typography variant="h6">{app.title}</Typography>
                     <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {app.company} — {app.location}
                     </Typography>

                     <Stack direction="row" spacing={2} alignItems="center">
                        <FormControl size="small" sx={{ minWidth: 160 }}>
                           <InputLabel>Status</InputLabel>
                           <Select
                              label="Status"
                              value={app.status}
                              onChange={async (e) => {
                                 await api.patch(
                                    `/applications/${app.internshipId}`,
                                    {
                                       status: e.target.value,
                                    }
                                 );
                                 load();
                              }}
                           >
                              {statuses.map((s) => (
                                 <MenuItem key={s} value={s}>
                                    {s}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>

                        <Button
                           variant="outlined"
                           onClick={async () => {
                              await api.delete(
                                 `/applications/${app.internshipId}`
                              );
                              load();
                           }}
                        >
                           Remove
                        </Button>
                     </Stack>
                  </CardContent>
               </Card>
            ))
         )}
      </Stack>
   );
}
