import React, {useEffect, useMemo, useState} from 'react';
import Button from "../Buttons/Button";
import {styled} from "@mui/material";
import {incrementTypes} from "./Contants";

const CounterContainer = styled('div')`
    display: flex;
    column-gap: 1rem;
    flex-direction: column;
    & .titleContainer {
      & .title {
        color: --var(--primary-main);
        margin-bottom: .5rem;
      }
    }
    & .content {
      display: flex;
      column-gap: 1rem;
    }
`;
export const Counter = ({type = 'single'}) => {
    const [count, setCount] = useState(0);
    const increment = amount => {
        switch (type) {
            case (incrementTypes.single):
                setCount(count + amount);
            break;
            case (incrementTypes.doubleWithoutPrev):
                setCount(count + amount);
                setCount(count + amount);
            break;
            case (incrementTypes.double):
                setCount((currentCount) => currentCount + amount);
                setCount((currentCount) => currentCount + amount);
            break;

        }

    };

    // Both of the next two approaches don't fire the useEffect
    // Approach 1
    // const title = useMemo(() => {
    //     return type === incrementTypes.single ? 'Single' : type === incrementTypes.doubleWithoutPrev ?
    //         'Double Without Previous (Wrong)' : 'Double with Previous';
    // }, [type]);
    // Approach 2
    // const title = type === incrementTypes.single ? 'Single' : type === incrementTypes.doubleWithoutPrev ?
    //     'Double Without Previous (Wrong)' : 'Double with Previous';

    // Getting the title like that causes building the function in every increment,
    // we can see it in the log of the useEffect
    const title = () => type === incrementTypes.single ? 'Single' : type === incrementTypes.doubleWithoutPrev ?
        'Double Without Previous (Wrong)' : 'Double with Previous';

    useEffect(() => {
        console.log('%c IN USE-EFFECT!', 'color: #ecb1f2; font-style:italic');
    }, [title]);
    return (
        <CounterContainer>
            {/*<div className='titleContainer'><p className='title'>{title}</p></div>*/}
            <div className='titleContainer'><p className='title'>{title()}</p></div>
            <div className='content'>
                <Button onClick={() => increment(-1)} title='-'/>
                <p>{count}</p>
                <Button onClick={() => increment(1)} title='+' />
            </div>
        </CounterContainer>
    )
}