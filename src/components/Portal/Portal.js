/** @jsx jsx **/
import {jsx, css} from "@emotion/react";
import {Container} from "../Dashboard/dashboard-styles";
import Recent from "./Recent";
import {styled} from "@mui/material";
import {useState} from "react";

const Header = styled('div')`
  
`;
const Portal = ({width, height}) => {
    // TODO: Move it to redux || context
    const [isMobile, setIsMobile] = useState(true);
    const containerProps = {
        dimensions: {height, width},
    }
    return (
        <Container {...containerProps}>
            {!isMobile && (
                <div>
                    <h1>Hello from future Portal. Remember to include theming in this application</h1>
                    <h2>Recent Section</h2>
                </div>)}
            <Recent />
        </Container>
    )
}

export default Portal;
