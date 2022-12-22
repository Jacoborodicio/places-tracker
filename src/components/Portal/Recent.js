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
    const [updateState, setUpdateState] = useState(true);
    const handleDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:9000/api/v1/places/${_id}`);
            setUpdateState(true);
        } catch (error) {console.log('%c Error while deleting a place', 'color: #ecb1f2; font-style:italic');}
    }
    useEffect(async () => {
        if (updateState) {
            try {
                const response = await axios.get('http://localhost:9000/api/v1/places');
                setRecentPlaces(response.data);
            } catch (err) {
                console.log('%cFile: Recent.js, Function: error, Line 39 error: ', 'color: pink', err)
            }
            setUpdateState(false);
            setLoading(false);
        }
    }, [updateState])
    return loading ? <p>loading...</p> : (
        <GlobalContainer>
            {recentPlaces.map(place => (
                <DashboardCard key={place['_id']} place={place} handleDelete={handleDelete}/>
            ))}
        </GlobalContainer>
    )
}

export default Recent;
