import React from "react";
import {Places} from "../../helpers/data.dummy.dev";
import DashboardCard from "../Cards/DashboardCard";
import {styled} from "@mui/material";

const GlobalContainer = styled('div')`
  box-sizing: border-box;
  overflow: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media only screen and (min-width: 30rem) {
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
    return (
        <GlobalContainer>
            {Places.map(place => (
                <DashboardCard key={place.id} place={place}/>
            ))}
        </GlobalContainer>
    )
}

export default Recent;
