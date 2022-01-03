/** @jsx jsx **/
import {jsx, css} from "@emotion/react";
import Recent from "./Recent";
import {styled} from "@mui/material";
import {useState} from "react";

const Header = styled('div')`
  
`;
const Portal = () => {
    // TODO: Move it to redux || context
    const [isMobile, setIsMobile] = useState(true);
    return (
        <>
        {!isMobile && (
                <div>
                    <h1>Hello from future Portal. Remember to include theming in this application</h1>
                    <h2>Recent Section</h2>
                </div>)}
            <Recent />
        </>
    )
}

export default Portal;
