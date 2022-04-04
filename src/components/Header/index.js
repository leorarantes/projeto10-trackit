import styled from 'styled-components';

import displayDefault from '../../assets/styles/displayDefault';

import logo from "../../assets/img/small-logo.svg"
import spongeBob from "../../assets/img/sponge-bob.png"

export default function Header() {
    return (
        <Conteiner>
            <SmallLogo src={logo} />
            <SpongeBob src ={spongeBob} />
        </Conteiner>
    );
}

const Conteiner = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    ${displayDefault};
    justify-content: space-between;
    position: fixed;
    top: 0px;
    padding-right: 18px;
    padding-left: 18px;
    z-index: 1;
`;

const SmallLogo = styled.img`
    width: 97px;
    height: 50px;
`;

const SpongeBob = styled.img`
    width: 51px;
    height: 51px;
`;