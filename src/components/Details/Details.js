/** @jsx jsx **/
import {jsx, css} from '@emotion/react';
import {useParams} from "react-router-dom";
import Button from "../Button/Button";
import {useEffect, useState} from "react";

const Details = () => {
    const [isLoading, setIsLoading] = useState(true);
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
                notes: "It's a really good place for the price!",
                mates: "Patricia"
            };
            setIsLoading(false);
    }, []);
    return isLoading ? <p>...holding id...</p> : (
        <div>
            <h2>Details page for the id: {id}</h2>
            <Button back />
        </div>
    )
}

export default Details;
