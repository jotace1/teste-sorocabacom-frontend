import { shade } from 'polished';
import styled from 'styled-components';
import backgroundImg from '../../assets/image2.png';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  img {
    margin-right: 17px;
  }
`;

export const HeaderTitle = styled.strong`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 22.5px;
`;

export const Nomearone = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RedBackground = styled.div`
  background: linear-gradient(#9c020480, #4d101045);
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 100%;
`;

export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: -50px;

    & + svg {
      margin-top: 40px;
    }
  }
`;

export const HeroHeader = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  padding: 13px;
`;

export const HeroImg = styled.img`
  max-width: 500px;
  width: 100%;
  max-height: 710px;
  height: 100%;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Open Sans', sans-serif;
  color: #fff;

  padding: 20px;
`;

export const Nomeartwo = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 150px 50px 150px 50px;

  @media (max-width: 1165px) {
    #hide1 {
      display: none;
    }
  }

  @media (max-width: 870px) {
    #hide2 {
      display: none;
    }
  }

  @media (max-width: 450px) {
    padding: 150px 0px;
  }
`;

export const HeroInfo = styled.div`
  border-radius: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  max-width: 327px;
  max-height: 613px;

  @media (max-width: 870px) {
    max-width: 267px;
  }
`;

export const HeroPicture = styled.div`
  display: flex;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
  max-width: 300px;
  max-height: 350px;
  height: 100%;
  width: 100%;
  margin-top: -50px;
  background: #363636;

  img {
    margin-bottom: 85px;
    height: 450px;
    width: 280px;
  }
`;

export const Description = styled.span`
  height: 183px;
  padding: 20px 25px 60px 25px;
  font-family: 'Open Sans', sans-serif;

  @media (max-width: 860px) {
    height: 233px;
  }
`;

export const NomearThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #7dede2;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  max-height: 860px;
  max-width: 1000px;
  padding: 100px;
  border-radius: 10px;
  margin-top: -35px;

  h1 {
    font-family: 'Montserrat';
    font-weight: bold;
    color: #63c7a9;
    margin-bottom: 40px;
  }

  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }

  @media (max-width: 780px) {
    max-height: 1100px;
    max-width: 390px;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const BasicInput = styled.input`
  border: 1px solid black;
  height: 48px;
  width: 249px;

  margin: 30px 20px;
  padding: 10px;

  @media (max-width: 780px) {
    margin: 10px;
  }
`;

export const MessageInput = styled.textarea`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
  margin-left: 18px;
  height: 197px;
  max-width: 545px;
  width: 100%;
  padding: 10px;

  @media (max-width: 780px) {
    margin: 0;
  }
`;

export const SubmitButton = styled.button`
  margin-left: 15px;
  margin-top: 70px;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  border: none;
  background: #63c7a9;
  color: #fff;
  padding: 15px 0;
  width: 249px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade('0.2', '#63c7a9')};
  }
`;

export const NomearFour = styled.div`
  margin-top: -35px;
  background: #363636;
  height: 410px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    margin-right: 30px;
  }
`;

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  p {
    font-family: 'Open Sans', sans-serif;
    color: red;
  }
`;
