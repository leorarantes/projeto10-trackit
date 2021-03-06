import styled from 'styled-components';

import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import axios from 'axios';
import { useContext } from "react";

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

import Header from '../Header';
import HabitBox2 from '../HabitBox2';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';
import UserContext from "../../contexts/UserContext";


export default function Today() {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    const { percentage, setPercentage } = useContext(UserContext);
    const [habitsArray, setHabitsArray] = useState([]);

    useEffect(() => {
        const habitsRequisition = axios.get(url, config);

        habitsRequisition.then(answer => {
            const arr = [...answer.data];
            let i=0;
            arr.forEach(element => {
                if(element.done === true) {
                    i++;
                }
            });
            setPercentage(parseInt((i / (arr.length > 0 ? arr.length : 1)) * 100));
            setHabitsArray([...arr]);
        });
        habitsRequisition.catch(() => alert("Erro!"));
    }, []);

    function donePercentage() {
        if (percentage === 0) {
            return ["#BABABA", "Nenhum hábito concluído ainda"]
        }
        else {
            return ["#8FC549", `${percentage}% dos hábitos concluídos`];
        }
    };
    
    const localeData = require('dayjs/plugin/localeData')
    dayjs.extend(localeData)

    const updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)

    dayjs.updateLocale('pt-br', {
        weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    });

    dayjs.locale('pt-br');
    const weekDay = dayjs.weekdays();
    const day = dayjs().get('date');
    const month = dayjs().get('month') + 1;

    return (
        <TodayBody>
            <Header />
            <Box color={donePercentage()[0]}>
                <h1>{weekDay[dayjs().day()]}, {day < 10 ? "0" + day : day}/{month < 10 ? "0" + month : month}</h1>
                <h2>{donePercentage()[1]}</h2>
            </Box>
            {habitsArray.map((element, index) => {
                const arr = [...habitsArray];
                const { id, name, done, currentSequence, highestSequence } = element;

                return (
                    <HabitBox2 name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence} id={id} arr={arr} index={index} setHabitsArray={setHabitsArray} key={id} />
                );
            }
            )}
            <ProgressBar />
            <Footer />
        </TodayBody>
    );
}

const TodayBody = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100%;
    background-color: #E5E5E5;
    ${displayDefault};
    flex-direction: column;
`;

const Box = styled.div`
    width: 332px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin-top: 70px;
    
    h1 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        ${fontDefault};
    }

    h2 {
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.color};
        ${fontDefault};
    }
`;
/*
if (counter > 0) {
    setCounter(0);
    habitsArray.forEach(element => {
        if (element.done === true) {
            setDoneHabit(doneHabit + 1);
        }
    });
} else {
    setCounter(1);
}

console.log(doneHabit);
*/


/*
    const [counter, setCounter] = useState(0);

    


*/

/*

*/

// func1={setHabitsArray} func2={setDoneHabit} doneHabit={doneHabit}

// 
