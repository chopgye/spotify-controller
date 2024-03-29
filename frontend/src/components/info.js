import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
   JOIN: "pages.join",
   CREATE: "pages.create",  
}

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);
    
    function joinInfo() {
        return "Enter the 6 digit code to join a pre-existing room";
    }

    function createInfo() {
        return "Will generate a 6 digit that can be shared with friends";
    }

    useEffect(() => {
        console.log("mounted");
        return () => console.log("unmounted");
    }); 

    return ( 
        <Grid container spacing={1} align="center">
            <Grid item xs={12}>
                <Typography component="h4" variant="h4">
                    What is Music House?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    { page === pages.JOIN ? joinInfo() : createInfo()}
                </Typography>        
            </Grid>
            <Grid item xs={12}>
                <IconButton onClick={() => {page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
                }}>
                    {page === pages.CREATE ? (<NavigateBeforeIcon/>) : (<NavigateNextIcon/>)  }
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <Button color="secondary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}