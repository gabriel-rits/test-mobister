import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Tecnologies } from './components/Tecnologies';
import { GlobalStyle } from './styles/global';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

export const App = () => (
  <>
    <GlobalStyle />

    <Header />
    <main>
      <Banner />
      <Tecnologies />
      <Newsletter />
    </main>
    <Footer />

    <Contact />
  </>
);
