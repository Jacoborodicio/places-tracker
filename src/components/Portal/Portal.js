/** @jsx jsx **/
import {jsx} from "@emotion/react";
import {Container} from "../Dashboard/dashboard-styles";
import Recent from "./Recent";
const Portal = ({width, height}) => {
    const containerProps = {
        dimensions: {height, width},
    }
    return (
        <Container {...containerProps}>
            <h1>Hello from future Portal. Remember to include theming in this application</h1>
            <h2>Recent Section</h2>
            <Recent />
        </Container>
    )
}

export default Portal;
