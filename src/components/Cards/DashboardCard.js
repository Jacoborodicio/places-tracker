/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";
import {NavLink} from "react-router-dom";
import DefaultImg from '../../images/defaultCodeImg.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Buttons/Button";
import {FavouriteStart} from "../Buttons/FavouriteStart";

const CardContainer = styled('div')`
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  border-radius: .5rem;
  color: whitesmoke;
  background-color: ${({theme}) => theme.palette.secondary.light};
  //border: 1px solid var(--borders-accent-dark)
`;

const CardHeader = styled('div')`
  width: 100%;
  gap: 1.5rem;
  display: inline-flex;
  justify-content: flex-start;
  
`;

const CardLogo = styled('div')`
    width: 25%;
    height: 8rem;
  & > img {
    border-radius: 5px;
    width: 100%;
    //@media (max-width: 30rem) {
    //  width: 2rem;
    //  height: 2rem;
    //}
    };
`;

const CardContent = styled('div')`
  width: 100%;
  & > div:first-of-type {
    border-bottom: 1px solid var(--text-accent-dark);
    margin-bottom: 1rem;
  } 
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: .33rem;
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
    color: var(--text-secondary-dark);
  }
`;

const CardFooter = styled('div')`
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
`;

const ImageFooter = styled('div')`
  width: 100%;
  text-align: center;
  h3 {
    text-transform: uppercase;
    padding-top: 1rem;
  }
`;
const ContentFooter = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const DashboardCard = ({place}) => {
    const {image, imageDescription, name, description, stars,favourite,  _id} = place;
    console.log('%cFile: DashboardCard.js, Function: DashboardCard, Line 94 id: ', 'color: pink', _id);
    return (
        <CardContainer>
            <CardHeader>
                <CardLogo>
                    <img src={DefaultImg} alt={imageDescription} />
                    <ImageFooter>
                        <h3>Bayern</h3>
                    </ImageFooter>
                </CardLogo>
                <CardContent>
                    <div>
                        <h1>{name}</h1>
                        <div>
                            {/*<FontAwesomeIcon icon={faStar} color={'#90DCB3'}/>*/}
                            <FavouriteStart active={favourite} disabled onlyActive />
                            {/*<p>{stars}</p>*/}
                        </div>
                    </div>
                    <p>{description}</p>
                </CardContent>
            </CardHeader>
            <CardFooter>
                <ContentFooter>
                    <Button title={'Details'} link={`/details/${_id}`}/>
                </ContentFooter>
            </CardFooter>
        </CardContainer>
    )
}

export default DashboardCard;
