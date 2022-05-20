import React from "react"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const Header = () => {
    return (
        <div className={"header"}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography textAlign={"right"} >
                                    MyPage
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <button>
                                    Works
                                </button>
                            </Grid>
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}