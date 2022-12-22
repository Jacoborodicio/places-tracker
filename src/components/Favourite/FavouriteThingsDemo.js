/** @jsx jsx **/
import {jsx, css} from "@emotion/react";
import {styled} from "@mui/material";
import {Counter} from "./Counter";
import {incrementTypes} from "./Contants";
import Button from "../Buttons/Button";
import {useCallback, useMemo, useState} from "react";
import {prev} from "stylis";

const GlobalContainer = styled('div')`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Increment = styled('div')`
  display: flex;
  column-gap: 2rem;
  border-radius: .25rem;
  padding: 1rem;
`;

const LimitedContainer = styled('div')`
  max-height: 400px;
  height: 400px;
  background-color: #90DCB3;
  overflow: auto;
  & p {
    color: black;
  }
`;

const FavouriteThingsDemo = () => {
    const [lightTheme, setLightTheme] = useState(true);

    return (
        <GlobalContainer>
            <Button back />
            {/*<p>Test increment</p>*/}
            {/*<Increment>*/}
            {/*    <Counter />*/}
            {/*    <Counter type={incrementTypes.doubleWithoutPrev}/>*/}
            {/*    <Counter type={incrementTypes.double} />*/}
            {/*</Increment>*/}
        </GlobalContainer>
    )
}

export default FavouriteThingsDemo;
