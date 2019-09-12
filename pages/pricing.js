import Head from '../components/Head';
import Hero from '../components/Hero';
import Preloader from '../components/Preloader';
import HeaderCraft from '../components/HeaderCraft';
import PricingTable from '../components/PricingTable';
import '../styles/styles.scss';

class Pricing extends React.Component {
    render() {
        return (
            <>
                <Head />
                <HeaderCraft />
                <PricingTable />
            </>
        );
    }
}
export default Pricing;
