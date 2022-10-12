import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Formik, ErrorMessage  } from 'formik';
import { object, string } from 'yup';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const authenticationProvider = getAuth(firebaseApp);

function RestrictedArea(props) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState('');

    const validationSchema = object().shape({
        email: string().email('Invalid email').required(),
        password: string().required(),
    });

    return (
        <div className="App">
            {!isUserLoggedIn && (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                remember_me: false
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => {
                                signInWithEmailAndPassword(authenticationProvider, values.email, values.password).then(() => {
                                    actions.setSubmitting(false);
                                    setIsUserLoggedIn(true);
                                }).catch((error) => {
                                    setFormError(true);
                                    setFormErrorMessage(error.code);
                                    actions.setSubmitting(false);
                                });
                            }}
                        >
                            {({
                                  handleChange,
                                  handleSubmit,
                                  handleBlur,
                                  errors,
                                  values,
                                  touched,
                                  isSubmitting
                              }) => (
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <Alert severity="error"
                                           sx={{display: formError ? 'block' : 'none'}}
                                    >
                                        <AlertTitle>Error</AlertTitle>
                                        {formErrorMessage}
                                    </Alert>
                                    <FormControl fullWidth>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            value={values.email}
                                            error={touched.email && errors.email}
                                            helperText={touched.email && errors.email && <ErrorMessage
                                                name="email"
                                                component="span"
                                                className="invalid-feedback"
                                            />}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isSubmitting}
                                            value={values.password}
                                            error={touched.password && errors.password}
                                            helperText={touched.password && errors.password && <ErrorMessage
                                                name="password"
                                                component="span"
                                                className="invalid-feedback"
                                            />}
                                        />
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        disabled={isSubmitting}
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                </Box>
                            )}
                        </Formik>
                    </Box>
                </Container>
            )}
            {isUserLoggedIn && props.children}
        </div>
    )
}

export default RestrictedArea;