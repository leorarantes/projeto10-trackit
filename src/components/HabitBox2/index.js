import styled from 'styled-components';
import axios from "axios";

import fontDefault from '../../assets/styles/fontDefault';

export default function HabitBox2(props) {
    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }

    const { name, done, currentSequence, highestSequence, id, func } = props;
    const checkUrl = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const uncheckUrl = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    function setDoneHabit() {
        if (done === false) {
            const checkRequisition = axios.post(checkUrl, null, config);
            checkRequisition.then(() => {
                const habitsRequisition = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
                habitsRequisition.then(answer => {
                    func([...answer.data]);
                });
                habitsRequisition.catch(() => alert("Erro na habitsRequisition"));
            })
            checkRequisition.catch(() => alert("Erro na checkRequisition"));
        }
        else {
            const uncheckRequisition = axios.post(uncheckUrl, null, config);
            uncheckRequisition.then(() => {
                const habitsRequisition = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
                habitsRequisition.then(answer => {
                    func([...answer.data]);
                });
                habitsRequisition.catch(() => alert("Erro na habitsRequisition"));
            })
            uncheckRequisition.catch(() => alert("Erro na uncheckRequisition"));
        }
    }

    return (
        <Conteiner>
            <h1>{name}</h1>
            <Box color={currentSequence >= highestSequence ? "#8FC549" : "#666666"}>
                <h2>Sequencia atual: <span>{currentSequence} {currentSequence === 1 ? "dia" : "dias"}</span></h2>
                <h2>Seu recorde: <span>{highestSequence} {highestSequence === 1 ? "dia" : "dias"}</span></h2>
            </Box>
            <Button onClick={() => setDoneHabit()} color={done ? "#8FC549" : "#E7E7E7"}><ion-icon name="checkmark-outline"></ion-icon></Button>
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
    width: 200px;
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