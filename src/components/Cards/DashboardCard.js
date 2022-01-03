/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";
import {NavLink} from "react-router-dom";
import DefaultImg from '../../images/defaultCodeImg.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Button/Button";

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
    height: 4.375rem;
    //@media (max-width: 30rem) {
    //  width: 2rem;
    //  height: 2rem;
    //}
    };
`;

const CardContent = styled('div')`
  width: 100%;
  & > div:first-of-type {border-bottom: 1px solid var(--text-accent-dark);} 
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: .25rem;
    div {
      display: flex;
      p {
        font-size: 10px;
        margin: 0;
      }
      svg {
        height: .65rem;
      }
    }
  }
  h1 {
    color: var(--text-accent-dark);
  }
  p {
    margin-top: .5rem;
    color: var(--text-secondary-dark);
  }
`;

const CardFooter = styled('div')`
  width: 100%;
  display: flex;
`;

const ImageFooter = styled('div')`
  width: 5rem;
  text-align: center;
  h3 {
    text-transform: uppercase;
    padding-top: .5rem;
  }
`;
const ContentFooter = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const DashboardCard = ({place}) => {
    const {image, imageDescription, name, description, stars} = place;
    return (
        <CardContainer>
            <CardHeader>
                <CardLogo>
                    <img src={DefaultImg} alt={imageDescription} />
                </CardLogo>
                <CardContent>
                    <div>
                        <h1>{name}</h1>
                        <div>
                            <p>{stars}</p>
                            <FontAwesomeIcon icon={faStar} color={'#90DCB3'}/>
                        </div>
                    </div>
                    <p>{description}</p>
                </CardContent>
            </CardHeader>
            <CardFooter>
                <ImageFooter>
                    <h3>Bayern</h3>
                </ImageFooter>
                <ContentFooter>
                    <Button title={'Details'} />
                </ContentFooter>
            </CardFooter>
        </CardContainer>
    )
}

export default DashboardCard;
