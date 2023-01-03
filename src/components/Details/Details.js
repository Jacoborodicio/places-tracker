/** @jsx jsx **/
import {jsx, css} from '@emotion/react';
import {useParams} from "react-router-dom";
import Button from "../Buttons/Button";
import React, {useEffect, useState} from "react";
import {styled} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapSigns, faTrash} from "@fortawesome/free-solid-svg-icons";
import Annotations from "./Annotations/Annotations";
import Header from "../Header/Header";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import {FavouriteStart} from "../Buttons/FavouriteStart";
import DefaultImg from '../../images/defaultCodeImg.png';
import {useQuery} from "react-query";
import {getPlaceById} from "../../helpers/api";
import {useDeletePlace} from "../../hooks/reactQueryCustomHooks";
import {baseApiUrl} from "../../helpers/constants";

const TopSection = styled('div')`
  display: flex;
  justify-content: space-between;
  & .metaData {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: flex-start;
    & .ratesContainer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem;
      & .thumbsUp {
        display: flex;
        gap: .25rem;
        & .text {
          color: #90DCB3;
          font-size: .75rem;
        }
      },
    & .favourite {

    }
    }
  }
  & .imgSection {
    width: 50%;
    overflow: hidden;
    height: 300px;
    & .footerImageSection {
      & .text {
        width: 100%;
        text-align: left;
        font-style: italic;
        color: var(--text-secondary-dark)
      }
    }
  }
`;
const ContentSection = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & .addressContainer {
    display: flex;
    justify-content: flex-start;
    & svg {
      color: var(--text-accent-dark);
      margin-right: .5rem;
    }
    & .addressComposedContainer {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      & p.address {
        color: var(--text-accent-dark);
        margin-right: .5rem;
      }
      & p.distance {
        color: var(--text-secondary-dark);
        font-size: 10px;
      }
    }
  }
`;
const DetailsContainer = styled('div')`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
    // TODO
    & .footerImageSection {
      margin-top: .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
 
  
`;
const Details = () => {
    const { id } = useParams();
    const {isLoading, isError, data: place, error} = useQuery(['placeById'], () => getPlaceById(id));
    const {mutate: deletePlace, isError: deleteIsError, isLoading: deleteLoading, error: deleteError} = useDeletePlace('placeById');
    const handleDelete = id => deletePlace(id);

    return isLoading ? <p>...holding id...</p> : (
        <DetailsContainer>
            <Header actionSection={{start: <Button secondary back />, middle: <h1>{place['name']}</h1>, end: <Button secondary onClick={handleDelete} icon={<FontAwesomeIcon icon={faTrash} color={'#90DCB3'} title='Delete' />} /> }} />
            <TopSection>
                <div className={'imgSection'}>
                    <img src={place?.image ? `${baseApiUrl + '/' + place.image}` : DefaultImg} alt={place.imageDescription} />
                    {/*This next line was working in release, production*/}
                    {/*<img src={place?.image ? 'https://jacoborodicio.com/api/v1/' + place.image : DefaultImg} alt={place.imageDescription} />*/}
                    <div className={'footerImageSection'}>
                        <p className='text'>{place?.imageDescription}</p>
                    </div>
                </div>
                <div className={'metaData'}>
                    {/*// TODO: Types component*/}
                    <div className='typesContainer'>
                        <p>types here!</p>
                    </div>
                    <div className='ratesContainer'>
                        {place['thumbsUp'] && (<div className='thumbsUp'>
                                <FontAwesomeIcon icon={faThumbsUp} color={'#90DCB3FF'} size={'sm'}/>
                                <p className='text'>{place['thumbsUp']}</p>
                            </div>
                        )}
                        <div className='favourite'>
                            <FavouriteStart disabled active={place?.favourite} />
                        </div>
                    </div>
                </div>
            </TopSection>
            <ContentSection>
                <div className={'addressContainer'}>
                    <FontAwesomeIcon icon={faMapSigns}/>
                    <div className={'addressComposedContainer'}>
                        {place?.address && <p className={'address'}>{place.address}</p>}
                        {place?.distance && place?.distanceUnit ? <p className={'distance'}>{`(${place.distance} ${place.distanceUnit})`}</p> : ''}
                    </div>
                </div>
                <div className="descriptionContainer">
                    <p>{place.description}</p>
                </div>
            </ContentSection>
            <div className={'annotationsContainer'}>
                {place?.annotations && <Annotations annotations={place?.annotations}/>}
            </div>
        </DetailsContainer>
    )
}

export default Details;
