import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Grid, Typography} from "@mui/material";

const CharDetails = () => {
    const [data, setData] = useState([]);
    const {id} = useParams()
    const Api = `https://rickandmortyapi.com/api/character/${id}`
    const {name, image, species, gender, location, status, created} = data

    useEffect(() => {
        (async function(){
            let response = await axios.get(Api)
            setData(response.data)
        })()
    }, [Api]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center'}}>
                <Grid item xs={4}>
                    <div style={{color: 'black', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <img src={image}/>
                        <div className='char_info'>
                            <Typography variant="h4">Name: {name}</Typography>
                            <div>
                                <Typography variant="h6">Species: {species}</Typography>
                            </div>
                            <div>
                                <Typography variant="h6">Gender: {gender}</Typography>
                            </div>
                            <div>
                                <Typography variant="h6">Location: {location?.name}</Typography>
                            </div>
                            <div>
                                <Typography variant="h6">Status: {status}</Typography>
                            </div>
                            <div>
                                <Typography variant="h6">Created: {created}</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CharDetails;
