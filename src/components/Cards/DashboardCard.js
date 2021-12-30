/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";
import {NavLink} from "react-router-dom";
import DefaultImg from '../../images/defaultCodeImg.png';
const CardContainer = styled('div')`
  height: 100%;
  width: 100%;
  padding: .5rem;
  border-radius: .5rem;
  color: burlywood;
  background-color: var(--blue-ncs);
  //  0 0 2px 1px hsl(217deg 18% 35% / 100%),
  box-shadow: 0 0 7px 4px hsl(217deg 18% 35% / 20%);

`;

const CardHeader = styled('div')`
  display: flex;
  justify-content: space-around;
  
`;

const CardLogo = styled('div')`
  flex-basis: 30%;
  & > img {
    width: 5rem;
    height: 5rem;
  }
`;

const CardTitle = styled('div')`
  flex-basis: 70%;
`;

const CardContent = styled('div')`
  
`;

const CardFooter = styled('div')`
  display: flex;
`;

const DashboardCard = ({place}) => {
    const {image, imageDescription, name} = place;
    return (
        <CardContainer>
            <CardHeader>
                <CardLogo>
                    <img src={DefaultImg} alt={imageDescription} />
                </CardLogo>
                <CardTitle>
                    <h1>{name}</h1>
                </CardTitle>
            </CardHeader>
            <CardFooter>
                {/*<NavLink to={place.link}>*/}
                {/*    Open*/}
                {/*</NavLink>*/}
            </CardFooter>
        </CardContainer>
    )
}

export default DashboardCard;
