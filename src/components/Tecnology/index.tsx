import { Container } from './styles';

type TecnologyProps = {
  icon: JSX.Element;
  title: string;
};

export const Tecnology = ({ icon, title }: TecnologyProps) => (
  <Container>
    {icon}
    <strong>{title}</strong>
  </Container>
);
