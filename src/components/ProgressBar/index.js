import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { useContext } from "react";

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

import UserContext from "../../contexts/UserContext";

export default function ProgressBar() {
    const { percentage, setPercentage } = useContext(UserContext);

    return (
        <Link to="/hoje">
            <Conteiner>
                <CircularProgressbar
                    value={percentage}
                    strokeWidth="9"
                    background="true"
                    backgroundPadding="5"
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        pathTransitionDuration: 0.5,
                        pathColor: `#FFFFFF`,
                        trailColor: '#52B6FF',
                        backgroundColor: '#52B6FF',
                    })}
                />
                <Text>Hoje</Text>
            </Conteiner>
        </Link>
    );
}

const Conteiner = styled.footer`
    box-sizing: border-box;
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    ${displayDefault};
    justify-content: center;
    position: fixed;
    bottom: 10px;
    right: calc(50vw - 45px);
    border-radius: 50%;
    z-index: 2;
`;

const Text = styled.h1`
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    ${fontDefault}
    text-align: center;
    position: absolute;
`;