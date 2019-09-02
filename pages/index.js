import Page from '../components/Page';
import Head from '../components/Head';
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import Craft from '../components/Craft';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Contact from '../components/Contact';
import '../styles/styles.scss';

function Home() {
    return (
        <Page>
            <Head />
            <Header />
            <Hero />
            <About />
            <Craft />
            <Roadmap />
            <Team />
            <Contact />
        </Page>
    );
}

export default Home;
