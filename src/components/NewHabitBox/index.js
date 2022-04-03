import { useState } from "react";
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

export default function NewHabitBox(props) {
    const {visibility} = props;
    
    const [daysArray, setDaysArray] = useState([
        {color: "#FFFFFF", fontColor: "#DBDBDB"},
        {color: "#FFFFFF", fontColor: "#DBDBDB"},
        {color: "#FFFFFF", fontColor: "#DBDBDB"},
        {color: "#FFFFFF", fontColor: "#DBDBDB"},
        {color: "#FFFFFF", fontColor: "#DBDBDB"},
        {color: "#FFFFFF", fontColor: "#DBDBDB"},
        {color: "#FFFFFF", fontColor: "#DBDBDB"}
    ]);

    const [loading, setLoading] = useState("Salvar");

    function markDay(index) {
        const arr = [...daysArray];
        
        if(arr[index].color === "#FFFFFF") {
            arr[index].color = "#DBDBDB";
            arr[index].fontColor = "#FFFFFF";
            setDaysArray([...arr]);
        }
        else {
            arr[index].color = "#FFFFFF";
            arr[index].fontColor = "#DBDBDB";
            setDaysArray([...arr]);
        }
    }

    const [habitName, setHabitName] = useState("");

    function save() {
        const daysArr = [];

        daysArray.forEach((element, index) => {
            if(element.fontColor === "#FFFFFF") {
                daysArr.push(index+1);
            }
        });

        const obj = {name: habitName, days: daysArr};
        console.log(obj);

        setLoading(<ThreeDots color="#FFFFFF" height={30} width={30} />);
        setTimeout(() => {
            window.location.reload();
            
        }, 2000);
    }

    return (
        <Conteiner visibility={visibility}>
            <Input type="text" placeholder="nome do hábito" value={habitName} onChange={e => setHabitName(e.target.value)} />
            <Box>
                <Weekday onClick={() => markDay(0)} color={daysArray[0].color} fontColor={daysArray[0].fontColor}><h1>D</h1></Weekday>
                <Weekday onClick={() => markDay(1)} color={daysArray[1].color} fontColor={daysArray[1].fontColor}><h1>S</h1></Weekday>
                <Weekday onClick={() => markDay(2)} color={daysArray[2].color} fontColor={daysArray[2].fontColor}><h1>T</h1></Weekday>
                <Weekday onClick={() => markDay(3)} color={daysArray[3].color} fontColor={daysArray[3].fontColor}><h1>Q</h1></Weekday>
                <Weekday onClick={() => markDay(4)} color={daysArray[4].color} fontColor={daysArray[4].fontColor}><h1>Q</h1></Weekday>
                <Weekday onClick={() => markDay(5)} color={daysArray[5].color} fontColor={daysArray[5].fontColor}><h1>S</h1></Weekday>
                <Weekday onClick={() => markDay(6)} color={daysArray[6].color} fontColor={daysArray[6].fontColor}><h1>S</h1></Weekday>
            </Box>
            <Cancel onClick={() => props.func("none")}>Cancelar</Cancel>
            <Save onClick={() => save()}>{loading}</Save>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    display: ${props => props.visibility};
    position: relative;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    ${displayDefault};
    padding-left: 11px;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    ${fontDefault};
    position: absolute;
    top: 18px;
    left: 15px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    ::placeholder {
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        ${fontDefault};
    }
`;

const Box = styled.div`
    width: 238px;
    height: 30px;
    ${displayDefault};
    justify-content: space-between;
    position: absolute;
    top: 71px;
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

const Cancel = styled.button`
    width: 84px;
    height: 35px;
    background: #FFFFFF;
    position: absolute;
    bottom: 15px;
    right: 123px;
    border: none;
    font-size: 16px;
    line-height: 20px;
    color: #52B6FF;
    ${fontDefault};
    text-align: center;
`;

const Save = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    ${displayDefault};
    justify-content: center;
    position: absolute;
    bottom: 15px;
    right: 18px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    ${fontDefault};
    text-align: center;
`;