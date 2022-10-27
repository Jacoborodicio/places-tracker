/** @jsx jsx **/
import {jsx, css} from '@emotion/react';
import {useParams} from "react-router-dom";
import Button from "../Buttons/Button";
import {useEffect, useState} from "react";
import {styled} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapSigns, faTrash} from "@fortawesome/free-solid-svg-icons";
import Annotations from "./Annotations/Annotations";
import axios from "axios";
import Header from "../Header/Header";

const DetailsContainer = styled('div')`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  & .imgSection {
    // TODO
    & .footerImageSection {
      margin-top: .5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      & .typesSection {
        // TODO: Styles to the container of the component
      }
    }
    & p.noImgMsg {
      color: lightgrey;
    }
  }
 
  
`;
const Details = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [place, setPlace] = useState({});
    const { id } = useParams();

    const timer = async ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(async () => {
        const response = await axios.get(`http://localhost:9000/api/v1/places/${id}`);
            setPlace(response.data);
            setIsLoading(false);
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9000/api/v1/places/${id}`);
            history.back();
        } catch (error) {console.log('%c Error while deleting a place', 'color: #ecb1f2; font-style:italic');}
    }
    return isLoading ? <p>...holding id...</p> : (
        <DetailsContainer>
            <Header actionSection={{start: <Button secondary back />, middle: <h1>{place['name']}</h1>, end: <Button secondary onClick={handleDelete} icon={<FontAwesomeIcon icon={faTrash} color={'#90DCB3'} title='Delete' />} /> }} />
            <div className={'imgSection'}>
                {place.image ? <img src={place.image} alt={place.imageDescription} /> : <p className={'noImgMsg'}>No image yet</p> }
                <div className={'footerImageSection'}>
                    <div className={'addressContainer'}>
                        <FontAwesomeIcon icon={faMapSigns}/>
                        <div className={'addressComposedContainer'}>
                            <p className={'address'}>{place.address}</p>
                            <p className={'distance'}>{`(${place.distance} ${place.distanceUnit})`}</p>
                        </div>
                    </div>
                    <div className={'typesContainer'}>
                        {/*// TODO: Types component*/}
                        <p>types here!</p>
                    </div>
                </div>
            </div>

            <div className="descriptionContainer">
                <p>{place.description}</p>
            </div>
            <div className={'annotationsContainer'}>
                <Annotations annotations={place.annotations} />
            </div>
        </DetailsContainer>
    )
}

export default Details;
