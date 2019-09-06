import Slide from 'react-reveal/Slide';
function About(props) {
    return (
        <section className="section" id="about">
            <div className="container">
                <Slide bottom>
                    <h2>We Are Litehouse</h2>
                </Slide>

                <div>
                    <Slide right>
                        <p className="lead">
                            We are a team of experienced journalists, storytellers, developers,
                            designers and creative experts committed to building platforms tailored
                            to the needs of modern news organizations and journalists.
                        </p>
                    </Slide>
                </div>

                <div>
                    <Slide left>
                        <p className="lead">
                            building platforms tailored to the needs of modern news organizations
                            and journalists. Our mission is to make cutting-edge technologies like
                            React, GraphQL, and Node.js accessible and easy-to-use for journalists
                            and editors working to tell beautiful stories under tight deadlines.
                        </p>
                    </Slide>
                </div>
            </div>
        </section>
    );
}

export default About;
