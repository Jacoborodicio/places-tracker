/** @jsx jsx **/
import {jsx, css} from '@emotion/react';
import {useParams} from "react-router-dom";
import Button from "../Button/Button";
import {useEffect, useState} from "react";
import {styled} from "@mui/material";

const DetailsContainer = styled('div')`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & .imgSection {
    // TODO
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
        // make api call to fetch the whole details of the desired place
        await timer(1000);
        const response = {
                id: 1,
                name: "Home",
                image: "",
                imageDescription: "",
                stars: 12, // Number of reputation stars
                ratio: 3, // Global valuation from 0-5
                discoveredAt: "2019-02-01",
                description: "The place where I currently live",
                address: "Ostuzzistrasse 2",
                distance: 0,
                type: "Home",
                lastTimeVisited: "2019-02-01",
                notes: [
                    {title: "Current situation", note: "Temporary closed because of Corona", createdAt: ''},
                    {title: "Reservation", note: "For a coffee is ok, but if we want to have dinner, it’s needed to call the day before due to the big number of reservations.", createdAt: '2021-01-10'},
                    {title: "Totally recommended!", note: "It’s a really good place for the price. I must give that the food was not unbeliveable but the panorama is awesome!", createdAt: '2020-12-12'}
                ],
                mates: ["Patricia"]
            };
            setPlace(response);
            setIsLoading(false);
    }, []);
    return isLoading ? <p>...holding id...</p> : (
        <DetailsContainer>
            <h1>{place['name']}</h1>
            <div className={'imgSection'}>
                {place.image ? <img src={place.image} alt={place.imageDescription} /> : <p className={'noImgMsg'}>No image yet</p> }
            </div>
            <div className="descriptionContainer">
                <p>{place.description}</p>
            </div>
        </DetailsContainer>
    )
}

export default Details;
