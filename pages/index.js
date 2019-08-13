import Page from '../components/Page';
import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Footer from '../components/Footer';
import './styles.scss';

function Home() {
    return (
        <Page>
            <Head />
            <Header />
            <Hero />
            <About />
            <Products />
            <Footer />
        </Page>
    );
}

export default Home;
