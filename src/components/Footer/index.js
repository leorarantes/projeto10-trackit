import styled from 'styled-components';

import { Link } from "react-router-dom";

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

export default function Footer() {
    return (
        <Conteiner>
            <Link to="/habitos"><button>Hábitos</button></Link>
            <Link to="/historico"><button>Histórico</button></Link>
        </Conteiner>
    );
}

const Conteiner = styled.footer`
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    ${displayDefault};
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    z-index: 1;

    button:first-child {
        width: calc(50vw - 45px);
        height: 70px;
        background-color: #FFFFFF;
        border: none;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        ${fontDefault};
        text-align: center;
    }

    button:last-child {
        width: calc(50vw - 45px);
        height: 70px;
        background-color: #FFFFFF;
        border: none;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        ${fontDefault};
        text-align: center;
    }
`;