import { Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

// Simple login validation (meets requirement)
const LoginSchema = Yup.object({
   email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
   password: Yup.string().required("Password is required"),
});

export default function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onLogin = async (values, { setSubmitting }) => {
      try {
         const res = await api.post("/auth/login", values);

         // Save user + token to Redux + localStorage
         dispatch(loginSuccess(res.data));

         // Redirect after login
         navigate("/dashboard");
      } catch (e) {
         alert(e?.response?.data?.message || "Login failed");
      } finally {
         setSubmitting(false);
      }
   };

   return (
      <Stack spacing={2}>
         <Typography variant="h4" fontWeight={700}>
            Login
         </Typography>

         <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={onLogin}
         >
            {({
               values,
               handleChange,
               handleBlur,
               handleSubmit,
               touched,
               errors,
               isSubmitting,
            }) => (
               <Stack spacing={2} component="form" onSubmit={handleSubmit}>
                  <TextField
                     label="Email"
                     name="email"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.email && Boolean(errors.email)}
                     helperText={touched.email && errors.email}
                  />

                  <TextField
                     label="Password"
                     name="password"
                     type="password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.password && Boolean(errors.password)}
                     helperText={touched.password && errors.password}
                  />

                  <Button
                     type="submit"
                     variant="contained"
                     disabled={isSubmitting}
                  >
                     {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
               </Stack>
            )}
         </Formik>
      </Stack>
   );
}
