/** @jsx jsx **/
import {jsx, css} from '@emotion/react';
import React from 'react';
import {styled} from "@mui/material";
import PropTypes from "prop-types";

const HeaderContainer = styled('div')`
    padding: 1rem;
    box-shadow: 0 1px 0 0 var(--text-accent-dark);
    width: 100%;
    display: flex;
    align-items: center;
`;
const ActionSection = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
      & .start {flex-basis: 15%; display: flex; justify-content: flex-start};
      & .middle{flex-basis: 70%; display: flex; justify-content: center};
      & .end {flex-basis: 15%; display: flex; justify-content: flex-end};
`;
const Header = ({actionSection}) => {
    const {start, middle, end} = actionSection;

    return (
        <HeaderContainer>
            {actionSection && (
                <ActionSection>
                    <div className='start'>
                        {start}
                    </div>
                    <div className='middle'>
                        {middle}
                    </div>
                    <div className='end'>
                        {end}
                    </div>
                </ActionSection>
            )}
        </HeaderContainer>
    )
}
Header.propTypes = {
    actionSection: PropTypes.object
}
Header.defaultProps = {
    actionSection: {start: {}, }
}
export default Header;