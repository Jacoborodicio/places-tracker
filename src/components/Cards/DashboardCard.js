/** @jsx jsx **/
import React from 'react';
import {styled} from "@mui/material";
import {jsx} from "@emotion/react";
import {NavLink, useHistory} from "react-router-dom";
import DefaultImg from '../../images/defaultCodeImg.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import Button from "../Buttons/Button";
import {FavouriteStart} from "../Buttons/FavouriteStart";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import axios from "axios";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {baseApiUrl} from "../../helpers/constants";

const CardContainer = styled('div')`
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  border-radius: .5rem;
  color: whitesmoke;
  background-color: ${({theme}) => theme.palette.secondary.light};
  cursor: pointer;
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

const DashboardCard = ({place, handleDelete}) => {
    const {image, imageDescription, name, description, thumbsUp, favourite,  _id} = place;
    const history = useHistory();
    const handleDeleteLocal = (e, id) => {
        // Needed to not fire the global event listener of the car (going to details page)
        e.stopPropagation();
        handleDelete(id);
    }
    return (
        <CardContainer onClick={() => history.push(`/details/${_id}`)}>
            <CardHeader>
                <CardLogo>
                    <img src={image ? `${baseApiUrl + '/' + image}` : DefaultImg} alt={imageDescription} />
                    {/*This next line was working on release, production*/}
                    {/*<img src={image ? 'https://jacoborodicio.com/api/v1/' + image : DefaultImg} alt={imageDescription} />*/}

                    <ImageFooter>
                        <h3>Bayern</h3>
                    </ImageFooter>
                </CardLogo>
                <CardContent>
                    <div>
                        <h1>{name}</h1>
                        <div>
                            <FavouriteStart active={favourite} disabled onlyActive />
                        </div>
                        {thumbsUp && (<div>
                            <FontAwesomeIcon icon={faThumbsUp} color={'#90DCB3FF'}/>
                            <p>{thumbsUp}</p>
                        </div>)}
                    </div>
                    <p>{description}</p>
                </CardContent>
            </CardHeader>
            <CardFooter>
                <ContentFooter>
                    <Button secondary onClick={e => handleDeleteLocal(e, _id)} icon={<FontAwesomeIcon icon={faTrash} color={'#90DCB3'} title='Delete' />} />
                </ContentFooter>
            </CardFooter>
        </CardContainer>
    )
}

export default DashboardCard;
