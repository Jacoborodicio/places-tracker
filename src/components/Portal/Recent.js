import React, {useEffect, useState} from "react";
import {Places} from "../../helpers/data.dummy.dev";
import DashboardCard from "../Cards/DashboardCard";
import {styled} from "@mui/material";
import axios from "axios";

const GlobalContainer = styled('div')`
  box-sizing: border-box;
  overflow: auto;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media only screen and (min-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 50rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 80rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Recent = () => {
    const [recentPlaces, setRecentPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const response = await axios.get('http://localhost:9000/api/v1/places');
        console.log('%cFile: Recent.js, Function: response, Line 31 response: ', 'color: pink', response);
        setRecentPlaces(response.data);
        setLoading(false);
    }, [])
    return loading ? <p>loading...</p> : (
        <GlobalContainer>
            {console.log('%cFile: Recent.js, Function: Recent, Line 36 recentPlaces: ', 'color: pink', recentPlaces)}
            {/*{Places.map(place => (*/}
            {/*    <DashboardCard key={place.id} place={place}/>*/}
            {/*))}*/}
            {recentPlaces.map(place => (
                <DashboardCard key={place['_id']} place={place}/>
            ))}
        </GlobalContainer>
    )
}

export default Recent;
