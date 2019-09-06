import Fade from 'react-reveal/Fade';
function Contact(props) {
    return (
        <section className="section section--blue" id="contact">
            <div className="container">
                <Fade>
                    <h2>Let's Stay in Touch</h2>
                </Fade>
                <Fade delay={100}>
                    <p className="lead">
                        If you have any questions, shoot us an email. Do you prefer to meet in
                        person in Prague? No problem! Are you outside of Czech Republic? Plane
                        ticket is on you but beer is on us! 🍺
                    </p>
                </Fade>
                <Fade delay={200}>
                    <a href="mailto:hello@litehouse.press" className="link link--big">
                        hello@litehouse.press
                    </a>
                </Fade>
                <Fade delay={300}>
                    <small>Copyright &copy; 2018 - 2019 Litehouse, All Rights Reserved</small>
                </Fade>
            </div>
        </section>
    );
}

export default Contact;
