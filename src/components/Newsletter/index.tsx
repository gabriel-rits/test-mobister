import { Container } from './styles';
import { Button } from '../Button';
import email from '../../assets/img/icons/email.png';

export const Newsletter = () => (
  <Container>
    <div className="container content">
      <div className="info">
        <img src={email} alt="icon email" />
        <p>
          Assine a nossa newsletter e receba todas as novidades em seu e-mail
        </p>
      </div>
      <div className="register">
        <div className="register-control">
          <input type="text" placeholder="Insira seu e-mail" />
          <Button type="button" className="white">
            ASSINAR
          </Button>
        </div>
        <p>
          Ao clicar no botão, você concorda com nossos{' '}
          <a href="#">Termos de Uso</a> e{' '}
          <a href="#">Política de Privacidade</a>, incluindo o uso de cookies e
          o envio de comunicações.
        </p>
      </div>
    </div>
  </Container>
);
