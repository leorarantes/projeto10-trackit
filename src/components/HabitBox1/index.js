import { useState } from "react";
import styled from 'styled-components';

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

export default function HabitBox1(props) {
    const {name, obj} = props;

    function deleteHabit() {

        setTimeout(() => window.location.reload(), 2000);
    }

    return (
        <Conteiner>
            <Text>{name}</Text>
            <Box>
                <Weekday color={obj[0].color} fontColor={obj[0].fontColor}><h1>D</h1></Weekday>
                <Weekday color={obj[1].color} fontColor={obj[1].fontColor}><h1>S</h1></Weekday>
                <Weekday color={obj[2].color} fontColor={obj[2].fontColor}><h1>T</h1></Weekday>
                <Weekday color={obj[3].color} fontColor={obj[3].fontColor}><h1>Q</h1></Weekday>
                <Weekday color={obj[4].color} fontColor={obj[4].fontColor}><h1>Q</h1></Weekday>
                <Weekday color={obj[5].color} fontColor={obj[5].fontColor}><h1>S</h1></Weekday>
                <Weekday color={obj[6].color} fontColor={obj[6].fontColor}><h1>S</h1></Weekday>
            </Box>
            <ion-icon onClick={() => deleteHabit()} name="trash-outline"></ion-icon>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    position: relative;
    margin-bottom: 10px;
    border-radius: 5px;

    ion-icon {
        font-size: 18px;
        position: absolute;
        top: 11px;
        right: 11px;
    }
`;

const Text = styled.div`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    ${fontDefault};
    position: absolute;
    top: 13px;
    left: 15px;
`;

const Box = styled.div`
    width: 238px;
    height: 30px;
    ${displayDefault};
    justify-content: space-between;
    position: absolute;
    bottom: 15px;
    left: 15px;
`;

const Weekday = styled.div`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    ${displayDefault};
    justify-content: center;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    h1 {
        font-size: 20px;
        line-height: 30px;
        ${fontDefault};
        color: ${props => props.fontColor};
    }
`;