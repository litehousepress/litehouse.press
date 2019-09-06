import Fade from 'react-reveal/Fade';

function Hero(props) {
    return (
        <>
            <video autoPlay muted loop>
                <source src="static/hero.mp4" />
            </video>
            <section className="section section--blue" id="hero">
                <h1>
                    <Fade top delay={150}>
                        New Frontiers in Digital Journalism
                    </Fade>
                </h1>
            </section>
        </>
    );
}

export default Hero;
