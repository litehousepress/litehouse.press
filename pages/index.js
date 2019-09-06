import Head from '../components/Head';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import About from '../components/About';
import Craft from '../components/Craft';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Contact from '../components/Contact';
import '../styles/styles.scss';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            showingAlert: true,
        };
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                showingAlert: false,
            });
        }, 1000);
    };
    render() {
        return (
            <>
                <Preloader showing={this.state.showingAlert} />
                <Head />
                <Header />
                <Hero />
                <About />
                <Craft />
                <Roadmap />
                <Team />
                <Contact />
            </>
        );
    }
}
export default Home;
