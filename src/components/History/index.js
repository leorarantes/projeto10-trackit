import styled from 'styled-components';

import displayDefault from '../../assets/styles/displayDefault';
import fontDefault from '../../assets/styles/fontDefault';

import Header from '../Header';
import ProgressBar from '../ProgressBar';
import Footer from '../Footer';


export default function History() {
    return (
        <HistoryBody>
            <Header />
            <Box>
                <h1>Histórico</h1>
            </Box>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            <ProgressBar />
            <Footer />
        </HistoryBody>
    );
}

const HistoryBody = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    ${displayDefault};
    flex-direction: column;

    h2 {
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        ${fontDefault};
        width: 338px;
    }
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