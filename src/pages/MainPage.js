import React, {useEffect, useState} from 'react';
import SearchBar from "../components/SearchBar/SearchBar";
import {Box} from "@mui/material";
import Card from "../components/CharacterCards/Card";
import Pagination from "../components/Pagination/Pagination";
import axios from "axios";

const MainPage = () => {
    const [pageNum, setPageNum] = useState(1);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const Api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`

    const {results} = data

    useEffect(() => {
        (async function(){
            let response = await axios.get(Api)
            setData(response.data)
        })()
    }, [Api]);


    return (
        <div>
            <div>
                <h1 style={{textAlign: "center"}}>Rick and Morty Characters</h1>
                <SearchBar setSearch={setSearch} setPageNum={setPageNum}/>
                <Box sx={{ width: '100%' }} >
                    <Card data={results} page='/' />
                </Box>
                <Pagination setPageNum={setPageNum} page={pageNum} data={data}/>
            </div>
        </div>
    );
};

export default MainPage;
