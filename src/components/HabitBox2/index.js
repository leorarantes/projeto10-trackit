import { useState } from "react";
import styled from 'styled-components';

import fontDefault from '../../assets/styles/fontDefault';

export default function HabitBox2(props) {
    const {name, done, currentSequence, highestSequence} = props;

    return (
        <Conteiner>
            <h1>{name}</h1>
            <Box color={currentSequence >= highestSequence ? "#8FC549" : "#666666"}>
                <h2>Sequencia atual: <span>{currentSequence} {currentSequence === 1 ? "dia" : "dias"}</span></h2>
                <h2>Seu recorde: <span>{highestSequence} {highestSequence === 1 ? "dia" : "dias"}</span></h2>
            </Box>
            <Button color={done ? "#8FC549" : "#E7E7E7"}><ion-icon name="checkmark-outline"></ion-icon></Button>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    position: relative;
    border-radius: 5px;
    margin-bottom: 10px;

    h1 {
        width: 208px;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        ${fontDefault};
        position: absolute;
        top: 13px;
        left: 15px;
    }
`;

const Box = styled.div`
    width: 146px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 17px;
    left: 15px;

    h2 {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
        ${fontDefault};
    }

    span {
        font-size: 13px;
        line-height: 16px;
        color: ${props => props.color};
        ${fontDefault};
    }
`;

const Button = styled.button`
    width: 69px;
    height: 69px;
    background-color: ${props => props.color};
    position: absolute;
    top: 13px;
    right: 13px;
    border: none;
    border-radius: 5px;

    ion-icon {
        font-size: 50px;
        color: #FFFFFF;
    }
`;