import { Container } from './styles';
import { Button } from '../Button';

export const Banner = () => (
  <Container>
    <div className="container content">
      <h1>Quem somos</h1>
      <p>
        Somos uma produtora web, especialista no desenvolvimento de sites e
        projetos personalizados que demandam Front-end, UX e UI design.
      </p>
      <Button type="button" className="red">
        COMEÇAR
      </Button>
    </div>
  </Container>
);
