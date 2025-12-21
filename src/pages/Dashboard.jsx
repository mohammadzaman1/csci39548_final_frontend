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
import { updateStatus, removeApplication } from "../store/applicationsSlice";

const statuses = ["Saved", "Applied", "Interview", "Offer", "Rejected"];

export default function Dashboard() {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user);
   const apps = useSelector((state) => state.applications.items);

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
                              onChange={(e) =>
                                 dispatch(
                                    updateStatus({
                                       internshipId: app.internshipId,
                                       status: e.target.value,
                                    })
                                 )
                              }
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
                           onClick={() =>
                              dispatch(removeApplication(app.internshipId))
                           }
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
