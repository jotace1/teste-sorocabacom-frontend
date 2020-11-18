import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { RiMouseFill, RiArrowDropDownLine } from 'react-icons/ri';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { FaChevronCircleUp } from 'react-icons/fa';
import ModalAddTask from '../../components/ModalFormSent';

import logoImg from '../../assets/Imagem 3.png';
import firstImage from '../../assets/Imagem card.png';
import GrantImg from '../../assets/Grant.png';
import redImg from '../../assets/Red.png';
import sybilImg from '../../assets/Sybil_2.png';
import {
  Container,
  Header,
  HeaderTitle,
  Nomearone,
  RedBackground,
  HeroHeader,
  HeroBox,
  HeroImg,
  HeroText,
  Nomeartwo,
  HeroInfo,
  HeroPicture,
  Description,
  NomearThree,
  FormContainer,
  FormBox,
  BasicInput,
  MessageInput,
  SubmitButton,
  NomearFour,
  ErrorBox,
} from './styles';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleSubmitForm = useCallback(
    async e => {
      e.preventDefault();
      const data = {
        name: inputName,
        email: inputEmail,
        message: inputMessage,
      };

      try {
        setErrorEmail('');
        setErrorName('');
        setErrorMessage('');
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          message: Yup.string().required('Mensagem obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        toggleModal();
        setInputEmail('');
        setInputName('');
        setInputMessage('');
      } catch (err) {
        err.errors.map((erro: string) => {
          if (erro.includes('Nome')) {
            setErrorName(erro);
          }
          if (erro.includes('E-mail') || erro.includes('e-mail')) {
            setErrorEmail(erro);
          }
          if (erro.includes('Mensagem')) {
            setErrorMessage(erro);
          }
        });
      }
    },
    [inputName, inputEmail, inputMessage, toggleModal],
  );

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="logo" />
        <HeaderTitle>SUPERGIANTGAMES</HeaderTitle>
      </Header>

      <Nomearone>
        <RedBackground>
          <HeroHeader>TRANSISTOR - RED THE SINGER</HeroHeader>

          <HeroBox>
            <HeroImg src={firstImage} alt="Ompeo" />
            <HeroText>
              <p> "Olha, o que quer que você </p>
              <p> esteja pensando, me faça </p>
              <p> um favor, não solte" </p>
            </HeroText>

            <RiMouseFill size={50} color="#fff" />
            <RiArrowDropDownLine size={30} color="#fff" />
          </HeroBox>
        </RedBackground>
      </Nomearone>

      <Nomeartwo>
        <BsChevronLeft size={30} color="#fff" />
        <HeroInfo id="hide1">
          <HeroPicture>
            <img src={GrantImg} alt="Grant" />
          </HeroPicture>

          <Description>
            A Camerata foi apenas os dois no início, e suas fileiras nunca foram
            destinadas a exceder um número a ser contado em uma mão.
          </Description>
        </HeroInfo>

        <HeroInfo>
          <HeroPicture>
            <img src={redImg} alt="Grant" />
          </HeroPicture>

          <Description>
            Red, uma jovem cantora, entrou em posse do Transistor. Sendo a
            poderosa espada falante. O grupo Possessores quer tanto ela quanto o
            Transistor e está perseguindo implacavelmente a sua procura.
          </Description>
        </HeroInfo>

        <HeroInfo id="hide2">
          <HeroPicture>
            <img src={sybilImg} alt="Grant" />
          </HeroPicture>

          <Description>
            Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da
            Camerata.
          </Description>
        </HeroInfo>
        <BsChevronRight size={30} color="#fff" />
      </Nomeartwo>

      <NomearThree>
        <FormContainer>
          <h1>FORMULÁRIO</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>

          <FormBox>
            <form onSubmit={handleSubmitForm}>
              <div>
                <BasicInput
                  placeholder="Nome"
                  value={inputName}
                  onChange={e => setInputName(e.target.value)}
                />
                <BasicInput
                  placeholder="Email"
                  value={inputEmail}
                  onChange={e => setInputEmail(e.target.value)}
                />
              </div>

              <MessageInput
                placeholder="Mensagem"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
              />
              <ErrorBox>
                {errorName && <p>{`- ${errorName}`}</p>}
                {errorEmail && <p>{`- ${errorEmail}`}</p>}
                {errorMessage && <p>{`- ${errorMessage}`}</p>}
              </ErrorBox>
              <SubmitButton type="submit">ENVIAR</SubmitButton>
            </form>
          </FormBox>
        </FormContainer>
      </NomearThree>

      <ModalAddTask setIsOpen={toggleModal} isOpen={modalOpen} />

      <NomearFour>
        <FaChevronCircleUp size={80} color="#fff" />
      </NomearFour>
    </Container>
  );
};

export default Home;
