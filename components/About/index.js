import Slide from 'react-reveal/Slide';
function About(props) {
    return (
        <section className="section" id="about">
            <div className="container">
                <Slide bottom>
                    <h2>We Are Litehouse</h2>
                </Slide>

                <div>
                    <p className="lead">
                        <Slide right>
                            We are a team of experienced journalists, storytellers, developers,
                            designers and creative experts committed to building platforms tailored
                            to the needs of modern news organizations and journalists.
                        </Slide>
                    </p>
                </div>

                <div>
                    <p className="lead">
                        <Slide left>
                            building platforms tailored to the needs of modern news organizations
                            and journalists. Our mission is to make cutting-edge technologies like
                            React, GraphQL, and Node.js accessible and easy-to-use for journalists
                            and editors working to tell beautiful stories under tight deadlines.
                        </Slide>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
