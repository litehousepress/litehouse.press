import Page from '../components/Page';
import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import './styles.scss';

function Home() {
    return (
        <Page>
            <Head />
            <Header />
            <Hero />
        </Page>
    );
}

export default Home;
