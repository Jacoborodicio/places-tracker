import React, {useEffect, useState} from "react";
import {Places} from "../../helpers/data.dummy.dev";
import DashboardCard from "../Cards/DashboardCard";
import {styled} from "@mui/material";
import axios from "axios";
import {useQuery} from "react-query";
import {getFavouritePlaces} from "../../helpers/api";
import {useDeletePlace} from "../../hooks/reactQueryCustomHooks";

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
const Favourite = () => {
    const {isLoading, isError, data: favouritePlaces, error} = useQuery(['favouritePlaces'], getFavouritePlaces);
    const {mutate: deletePlace, isError: deleteIsError, isLoading: deleteLoading, error: deleteError} = useDeletePlace('favouritePlaces');
    const handleDelete = id => deletePlace(id);

    return isLoading ? <p>loading...</p> : (
        <GlobalContainer>
            {favouritePlaces.map(place => (
                <DashboardCard key={place['_id']} place={place} handleDelete={handleDelete}/>
            ))}
        </GlobalContainer>
    )
}

export default Favourite;