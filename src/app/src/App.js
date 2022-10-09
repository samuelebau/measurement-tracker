import RestrictedArea from './common/RestricedArea';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';

// Menus Element Dependencies
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// Accordion Element Dependencies
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Form Element Dependencies
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function App() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1000,
                lg: 1200,
                xl: 1920
            }
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    },
                    sizeSmall: {
                        padding: '6px 16px'
                    },
                    sizeMedium: {
                        padding: '8px 20px'
                    },
                    sizeLarge: {
                        padding: '11px 24px'
                    },
                    textSizeSmall: {
                        padding: '7px 12px'
                    },
                    textSizeMedium: {
                        padding: '9px 16px'
                    },
                    textSizeLarge: {
                        padding: '12px 16px'
                    }
                }
            },
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true
                }
            },
            MuiCardContent: {
                styleOverrides: {
                    root: {
                        padding: '32px 24px',
                        '&:last-child': {
                            paddingBottom: '32px'
                        }
                    }
                }
            },
            MuiCardHeader: {
                defaultProps: {
                    titleTypographyProps: {
                        variant: 'h6'
                    },
                    subheaderTypographyProps: {
                        variant: 'body2'
                    }
                },
                styleOverrides: {
                    root: {
                        padding: '32px 24px'
                    }
                }
            },
            MuiCssBaseline: {
                styleOverrides: {
                    '*': {
                        boxSizing: 'border-box',
                        margin: 0,
                        padding: 0
                    },
                    html: {
                        MozOsxFontSmoothing: 'grayscale',
                        WebkitFontSmoothing: 'antialiased',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100%',
                        width: '100%'
                    },
                    body: {
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        minHeight: '100%',
                        width: '100%'
                    },
                    '#__next': {
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%'
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: '#E6E8F0'
                    }
                }
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#F3F4F6',
                        '.MuiTableCell-root': {
                            color: '#374151'
                        },
                        borderBottom: 'none',
                        '& .MuiTableCell-root': {
                            borderBottom: 'none',
                            fontSize: '12px',
                            fontWeight: 600,
                            lineHeight: 1,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase'
                        },
                        '& .MuiTableCell-paddingCheckbox': {
                            paddingTop: 4,
                            paddingBottom: 4
                        }
                    }
                }
            }
        },
        palette: {
            neutral: {
                100: '#F3F4F6',
                200: '#E5E7EB',
                300: '#D1D5DB',
                400: '#9CA3AF',
                500: '#6B7280',
                600: '#4B5563',
                700: '#374151',
                800: '#1F2937',
                900: '#111827'
            },
            action: {
                active: '#6B7280',
                focus: 'rgba(55, 65, 81, 0.12)',
                hover: 'rgba(55, 65, 81, 0.04)',
                selected: 'rgba(55, 65, 81, 0.08)',
                disabledBackground: 'rgba(55, 65, 81, 0.12)',
                disabled: 'rgba(55, 65, 81, 0.26)'
            },
            background: {
                default: '#F9FAFC',
                paper: '#FFFFFF'
            },
            divider: '#E6E8F0',
            primary: {
                main: '#5048E5',
                light: '#828DF8',
                dark: '#3832A0',
                contrastText: '#FFFFFF'
            },
            secondary: {
                main: '#10B981',
                light: '#3FC79A',
                dark: '#0B815A',
                contrastText: '#FFFFFF'
            },
            success: {
                main: '#14B8A6',
                light: '#43C6B7',
                dark: '#0E8074',
                contrastText: '#FFFFFF'
            },
            info: {
                main: '#2196F3',
                light: '#64B6F7',
                dark: '#0B79D0',
                contrastText: '#FFFFFF'
            },
            warning: {
                main: '#FFB020',
                light: '#FFBF4C',
                dark: '#B27B16',
                contrastText: '#FFFFFF'
            },
            error: {
                main: '#D14343',
                light: '#DA6868',
                dark: '#922E2E',
                contrastText: '#FFFFFF'
            },
            text: {
                primary: '#121828',
                secondary: '#65748B',
                disabled: 'rgba(55, 65, 81, 0.48)'
            }
        },
        shape: {
            borderRadius: 8
        },
        shadows: [
            'none',
            '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
            '0px 1px 2px rgba(100, 116, 139, 0.12)',
            '0px 1px 4px rgba(100, 116, 139, 0.12)',
            '0px 1px 5px rgba(100, 116, 139, 0.12)',
            '0px 1px 6px rgba(100, 116, 139, 0.12)',
            '0px 2px 6px rgba(100, 116, 139, 0.12)',
            '0px 3px 6px rgba(100, 116, 139, 0.12)',
            '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
            '0px 5px 12px rgba(100, 116, 139, 0.12)',
            '0px 5px 14px rgba(100, 116, 139, 0.12)',
            '0px 5px 15px rgba(100, 116, 139, 0.12)',
            '0px 6px 15px rgba(100, 116, 139, 0.12)',
            '0px 7px 15px rgba(100, 116, 139, 0.12)',
            '0px 8px 15px rgba(100, 116, 139, 0.12)',
            '0px 9px 15px rgba(100, 116, 139, 0.12)',
            '0px 10px 15px rgba(100, 116, 139, 0.12)',
            '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
            '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
            '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
            '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
            '0px 25px 50px rgba(100, 116, 139, 0.25)',
            '0px 25px 50px rgba(100, 116, 139, 0.25)',
            '0px 25px 50px rgba(100, 116, 139, 0.25)',
            '0px 25px 50px rgba(100, 116, 139, 0.25)'
        ],
        typography: {
            button: {
                fontWeight: 600
            },
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
            body1: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.5
            },
            body2: {
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.57
            },
            subtitle1: {
                fontSize: '1rem',
                fontWeight: 500,
                lineHeight: 1.75
            },
            subtitle2: {
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: 1.57
            },
            overline: {
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                lineHeight: 2.5,
                textTransform: 'uppercase'
            },
            caption: {
                fontSize: '0.75rem',
                fontWeight: 400,
                lineHeight: 1.66
            },
            h1: {
                fontWeight: 700,
                fontSize: '3.5rem',
                lineHeight: 1.375
            },
            h2: {
                fontWeight: 700,
                fontSize: '3rem',
                lineHeight: 1.375
            },
            h3: {
                fontWeight: 700,
                fontSize: '2.25rem',
                lineHeight: 1.375
            },
            h4: {
                fontWeight: 700,
                fontSize: '2rem',
                lineHeight: 1.375
            },
            h5: {
                fontWeight: 600,
                fontSize: '1.5rem',
                lineHeight: 1.375
            },
            h6: {
                fontWeight: 600,
                fontSize: '1.125rem',
                lineHeight: 1.375
            }
        }
    });

    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <ThemeProvider theme={theme}>
            <RestrictedArea>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Measurement Tracker
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth="xl">
                        <Stack spacing={2} mt={2} mb={2}>
                            <Paper elevation={3} >
                                <Accordion TransitionProps={{ unmountOnExit: true }}
                                           expanded={expanded === 'general_torso'} onChange={handleChange('general_torso')}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>General & Torso</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Peso"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Spalle"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Fianchi"
                                                        helperText="4 dita sotto obliqui"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Torace"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Vita"
                                                        helperText="Ombelico"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Contorno"
                                                        helperText="4 dita sopra ombelico"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                            <Paper elevation={3} >
                                <Accordion TransitionProps={{ unmountOnExit: true }}
                                           expanded={expanded === 'gambe_polpacci'} onChange={handleChange('gambe_polpacci')}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>Coscie & Polpacci</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Gamba DX"
                                                        helperText="Appena sotto il pene"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Gamba SX"
                                                        helperText="Appena sotto il pene"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Polpaccio DX"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Polpaccio SX"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                            <Paper elevation={3} >
                                <Accordion TransitionProps={{ unmountOnExit: true }}
                                           expanded={expanded === 'avambracci_bicipiti'} onChange={handleChange('avambracci_bicipiti')}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>Avambracci & Bicipiti</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Avambraccio DX"
                                                        helperText="4 dita dal gomito"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Avambraccio SX"
                                                        helperText="4 dita dal gomito"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Bicipite DX"
                                                        helperText="Contracted"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Bicipite SX"
                                                        helperText="Contracted"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Bicipite DX"
                                                        helperText="Relaxed"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl fullWidth>
                                                    <TextField
                                                        label="Bicipite SX"
                                                        helperText="Relaxed"
                                                        variant="standard"
                                                        type='number'
                                                        step="0.1"
                                                        max="999.9"
                                                        InputProps={{
                                                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                                        }}
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Paper>
                        </Stack>
                    </Container>
                    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                        <Toolbar>
                            <StyledFab color="secondary" aria-label="add">
                                <AddIcon />
                            </StyledFab>
                        </Toolbar>
                    </AppBar>
                </Box>
            </RestrictedArea>
        </ThemeProvider>
    );
}

export default App;
