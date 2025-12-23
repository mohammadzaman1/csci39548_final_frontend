import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Formik } from "formik";
import * as Yup from "yup";

// Basic client-side validation rules (meets project requirement)
const RegisterSchema = Yup.object({
   name: Yup.string().max(50, "Name is too long"),
   email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
   password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
});

export default function Register() {
   const navigate = useNavigate();

   const onRegister = async (values, { setSubmitting }) => {
      try {
         await api.post("/auth/register", values);
         navigate("/login");
      } catch (e) {
         alert(e?.response?.data?.message || "Register failed");
      } finally {
         setSubmitting(false);
      }
   };

   return (
      <Stack spacing={2}>
         <Typography variant="h4" fontWeight={700}>
            Sign Up
         </Typography>

         <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={RegisterSchema}
            onSubmit={onRegister}
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
                     label="Name (optional)"
                     name="name"
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.name && Boolean(errors.name)}
                     helperText={touched.name && errors.name}
                  />

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
                     {isSubmitting ? "Creating..." : "Create account"}
                  </Button>
               </Stack>
            )}
         </Formik>
      </Stack>
   );
}
