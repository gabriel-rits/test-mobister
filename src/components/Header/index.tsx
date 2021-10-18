import { Container } from './styles';

import logo from '../../assets/img/logo.svg';
import hamburguer from '../../assets/img/hamburguer.svg';

export const Header = () => (
  <Container className="container">
    <img src={logo} alt="logo" className="logo" />
    <img src={hamburguer} alt="hamburguer menu" />
  </Container>
);
