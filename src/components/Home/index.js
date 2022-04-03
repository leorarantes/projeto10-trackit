import styled from 'styled-components';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

import logo from "../../assets/img/logo.svg"

export default function Home() {
    const [loading, setLoading] = useState("Entrar");

    function load() {
        setLoading(<ThreeDots color="#FFFFFF" height={50} width={50} />);
    }

    return (
    <HomeBody>
        <Logo src={logo} />
        <HomeInput type="text" placeholder="email" />
        <HomeInput type="text" placeholder="senha" />
        <BlueButton onClick={() => load()}>{loading}</BlueButton>
        <Link to="/cadastro"><AlternativeLink>Não tem uma conta? Cadastre-se!</AlternativeLink></Link>
    </HomeBody>
    );
}

const HomeBody = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
    ${displayDefault}
    flex-direction: column;
    justify-content: center;

    input:nth-child(2) {
        margin-top: 33px;
    }
`;

const Logo = styled.img`
    width: 180px;
    height: 180px;
`;

const HomeInput = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    ${displayDefault}
    padding-left: 11px;
    margin-bottom: 7px;
    
    ::placeholder {
        font-size: 20px;
        line-height: 25px;
        ${fontDefault}
        color: #DBDBDB;
    }
`;

const BlueButton = styled.button`
    width: 317px;
    height: 45px;
    background: #52B6FF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    ${displayDefault}
    justify-content: center;
    padding-left: 11px;
    font-size: 21px;
    line-height: 26px;
    ${fontDefault}
    color: #FFFFFF;
    text-align: center;
`;

const AlternativeLink = styled.h1`
    font-size: 14px;
    line-height: 17px;
    ${fontDefault}
    color: #52B6FF;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
`;