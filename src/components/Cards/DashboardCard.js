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
  color: whitesmoke;
  background-color: var(--secondary-dark);
  //border: 1px solid var(--borders-accent-dark)
`;

const CardHeader = styled('div')`
  display: flex;
  justify-content: flex-start;
  
`;

const CardLogo = styled('div')`
  & > img {
    border-radius: 5px;
    margin-right: .5rem;
    width: 5rem;
    height: 5rem;
    @media (max-width: 30rem) {
      width: 2rem;
      height: 2rem;
    }
    };
`;

const CardContent = styled('div')`
  p {
    margin-top: .5rem;
    color: var(--text-secondary-dark);
    font-size: .8rem;
  }
`;

const CardFooter = styled('div')`
  display: flex;
`;

const DashboardCard = ({place}) => {
    const {image, imageDescription, name, description} = place;
    return (
        <CardContainer>
            <CardHeader>
                <CardLogo>
                    <img src={DefaultImg} alt={imageDescription} />
                </CardLogo>
                <CardContent>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </CardContent>
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
