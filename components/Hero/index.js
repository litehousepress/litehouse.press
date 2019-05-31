import './Hero.scss';

function Hero(props) {
    return (
        <section className="section-hero">
            <h1>Welcome to Litehouse</h1>
            <h2>New Frontier of Online Journalism</h2>
            <a href="mailto:hello@litehouse.press?subject=First to know!&body=I want to learn more about your upcoming product!">
                Let me know
            </a>
        </section>
    );
}

export default Hero;
