import React from 'react';
import {Grid, Typography} from '@mui/material';
import {Link} from 'react-router-dom'
const Card = ({data, page}) => {
    return (
        <Grid container spacing={2}>
            {data?.map((char, i) => (
                <Grid item xs={3} key={char.id} style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to={`${page}${char.id}`} style={{textDecoration: 'none'}} >
                        <div style={{color: 'black'}}>
                            <img src={char.image} alt='char image'/>
                            <div className= 'char_info'>
                                <Typography variant="h6">Name: {char.name}</Typography>
                                <div>
                                    <Typography variant="h6">Status: {char.status}</Typography>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default Card;
