import styled from 'styled-components';

import { useState } from "react";
import { Link } from "react-router-dom";

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

import Header from '../Header';
import NewHabitBox from '../NewHabitBox';
import HabitBox1 from '../HabitBox1';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';


export default function Habits() {
    const habitsArray = [
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ];

    const [textVisibility, setTextVisibility] = useState("visible");
    const [newHabitBoxVisibility, setNewHabitBoxVisibility] = useState("none");

    if(textVisibility === "visible" && habitsArray.length > 0) {
        setTextVisibility("hidden");
    }

    return (
        <HabitsBody>
            <Header />
            <Box>
                <h1>Meus hábitos</h1>
                <Plus onClick={() => setNewHabitBoxVisibility("default")}><h1>+</h1></Plus>
            </Box>
            <NewHabitBox visibility={newHabitBoxVisibility} func={setNewHabitBoxVisibility} />
            {habitsArray.map(element => {
                const {id, name, days} = element;
                const obj = [
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                    { color: "#FFFFFF", fontColor: "#DBDBDB" },
                ];
                days.forEach(element => {
                    obj[element-1].color = "#DBDBDB";
                    obj[element-1].fontColor = "#FFFFFF";
                });

                return (
                    <HabitBox1 name={name} obj={obj} key={id} />
                );
            })}
            <Text visibility={textVisibility}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            <ProgressBar />
            <Footer />
        </HabitsBody>
    );
}

const HabitsBody = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    ${displayDefault};
    flex-direction: column;
`;

const Box = styled.div`
    width: 332px;
    height: 85px;
    ${displayDefault};
    justify-content: space-between; 
    margin-top: 70px;
    
    h1 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        ${fontDefault};
    }
`;

const Plus = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    ${displayDefault};
    justify-content: center;
    border-radius: 5px;

    h1 {
        width: 40px;
        height: 40px;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
        ${fontDefault};
        text-align: center;
    }
`;

const Text = styled.div`
    width: 332px;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    ${fontDefault};
    visibility: ${props => props.visibility};
`;

