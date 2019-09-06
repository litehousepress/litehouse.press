import Link from 'next/link';
import Fade from 'react-reveal/Fade';

function Craft(props) {
    return (
        <section className="section section--inverted" id="products">
            <div className="container text-center">
                <Fade>
                    <svg viewBox="0 0 100 128" className="craft-logo">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-670.000000, -2946.000000)" fill="#5684FD">
                                <g transform="translate(-693.000000, 2946.000000)">
                                    <g transform="translate(1363.000000, 0.000000)">
                                        <rect
                                            opacity="0.797572545"
                                            x="42.6666667"
                                            y="85.3333333"
                                            width="56.8888889"
                                            height="42.6666667"
                                        ></rect>
                                        <rect
                                            opacity="0.795107887"
                                            x="42.6666667"
                                            y="0"
                                            width="56.8888889"
                                            height="42.6666667"
                                        ></rect>
                                        <polygon points="21.3333333 21.3333333 42.6666667 0 42.6666667 42.6666667 0 42.6666667"></polygon>
                                        <polygon points="0 85.3333333 42.6666667 85.3333333 42.6666667 128 21.3333333 106.666667"></polygon>
                                        <rect
                                            opacity="0.703334263"
                                            x="0"
                                            y="42.6666667"
                                            width="42.6666667"
                                            height="42.6666667"
                                        ></rect>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Fade>
                <h2>
                    <Fade>Litehouse Craft</Fade>
                </h2>
                <p className="lead">
                    <Fade>
                        Introducing Litehouse Craft, revolutionary easy-to-use tool for
                        storytellers.
                    </Fade>
                </p>
                <Fade bottom>
                    <img src="/static/screen1.png" className="screen" />
                </Fade>
                <Fade bottom>
                    <Link href="#contact">
                        <button className="btn">
                            Contact Us<span className="hide"> For More Details</span>
                        </button>
                    </Link>
                </Fade>
            </div>
        </section>
    );
}

export default Craft;
