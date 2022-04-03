import styled from 'styled-components';

import { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

import Header from '../Header';
import HabitBox2 from '../HabitBox2';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';


export default function Today() {
    const habitsArray =
        [
            {
                "id": 3,
                "name": "Acordar",
                "done": true,
                "currentSequence": 1,
                "highestSequence": 1
            },
            {
                "id": 4,
                "name": "Comer",
                "done": true,
                "currentSequence": 1,
                "highestSequence": 5
            },
            {
                "id": 5,
                "name": "Ouvir música",
                "done": false,
                "currentSequence": 3,
                "highestSequence": 4
            }
        ];

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
    const month = dayjs().get('month')+1;

    const [done, setDone] = useState(1);

    function donePercentage() {
        const percentage = parseInt((done / habitsArray.length) * 100);

        if(percentage === 0) {
            return ["#BABABA", "Nenhum hábito concluído ainda"]
        }
        else {
            return ["#8FC549", `${percentage}% dos hábitos concluídos`];
        }
    };

    return (
        <TodayBody>
            <Header />
            <Box color={donePercentage()[0]}>
                <h1>{weekDay[dayjs().day()]}, {day < 10 ? "0" + day : day}/{month < 10 ? "0" + month : month}</h1>
                <h2>{donePercentage()[1]}</h2>
            </Box>
            {habitsArray.map(element => {
                const {id, name, done, currentSequence, highestSequence} = element;
                
                return (
                    <HabitBox2 name={name} done={done} currentSequence={currentSequence} highestSequence={highestSequence} key={id} />
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
    height: 100vh;
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