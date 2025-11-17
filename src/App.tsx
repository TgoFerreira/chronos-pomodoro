import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>HOME</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
}
