import React from 'react';
import {Box, Button, Input} from "@mui/material";

import styles from './style.module.css'

const SearchBar = ({setSearch, setPageNum}) => {
    return (
        <Box
            component="form"
            sx={{'& > :not(style)': { m: 1 }}}
            style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}
        >
            <Input
                type='text'
                placeholder='Search for characters'
                className={styles.input}
                onChange={e => {
                    setSearch(e.target.value)
                    setPageNum(1)
                }}/>
            <Button
                variant="contained"
                onClick={e => e.preventDefault()}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
