import React, { useCallback } from 'react';

import { AiOutlineCheckCircle } from 'react-icons/ai';
import Modal from '../Modal';

import { Container, OkButton } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalFormSent: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const handleOk = useCallback(async () => {
    setIsOpen();
  }, [setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <AiOutlineCheckCircle size={70} />
        <h1>Seu formulário foi enviado!</h1>
        <OkButton type="submit" onClick={handleOk}>
          Ok
        </OkButton>
      </Container>
    </Modal>
  );
};

export default ModalFormSent;
