import Link from 'next/link';
function Craft(props) {
    return (
        <section className="section section--center" id="products">
            <div className="container--full">
                <svg viewBox="0 0 1202 200" className="decoration-top">
                    <path
                        d="M1201,0 L1201.01739,97.9316112 C1083.1047,158.850551 858.583214,200 601,200 C343.420679,200 118.902091,158.851795 0.987953344,97.9343734 L1,0 L1201,0 Z"
                        fill="#5684FD"
                    ></path>
                </svg>
            </div>
            <div className="container">
                <svg viewBox="0 0 100 128" className="craft-logo">
                    <g id="Web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g
                            id="Website"
                            transform="translate(-670.000000, -2946.000000)"
                            fill="#5684FD"
                        >
                            <g id="Craft" transform="translate(-693.000000, 2946.000000)">
                                <g id="Group" transform="translate(1363.000000, 0.000000)">
                                    <rect
                                        id="Rectangle"
                                        opacity="0.797572545"
                                        x="42.6666667"
                                        y="85.3333333"
                                        width="56.8888889"
                                        height="42.6666667"
                                    ></rect>
                                    <rect
                                        id="Rectangle"
                                        opacity="0.795107887"
                                        x="42.6666667"
                                        y="0"
                                        width="56.8888889"
                                        height="42.6666667"
                                    ></rect>
                                    <polygon
                                        id="Rectangle"
                                        points="21.3333333 21.3333333 42.6666667 0 42.6666667 42.6666667 0 42.6666667"
                                    ></polygon>
                                    <polygon
                                        id="Rectangle"
                                        points="0 85.3333333 42.6666667 85.3333333 42.6666667 128 21.3333333 106.666667"
                                    ></polygon>
                                    <rect
                                        id="Rectangle"
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
                <h2>Litehouse Craft</h2>
                <p className="lead">
                    Introducing Litehouse Craft, revolutionary easy-to-use tool for journalists and
                    storytellers.
                </p>
                <img src="/static/screen1.png" className="screen" />
                <Link href="#contact">
                    <button className="btn">
                        Contact Us<span className="hide"> For More Details</span>
                    </button>
                </Link>
            </div>
            <div className="container--full">
                <svg viewBox="0 0 1202 200" className="decoration-bottom">
                    <g id="Group" transform="translate(0.987953, 0.000000)">
                        <rect
                            fill="#5684FD"
                            transform="translate(600.012047, 100.000000) rotate(-180.000000) translate(-600.012047, -100.000000) "
                            x="0.0120466557"
                            y="0"
                            width="1200"
                            height="200"
                        ></rect>
                        <path
                            d="M1200.01205,0 L1200.02944,97.9316112 C1082.11674,158.850551 857.595261,200 600.012047,200 C342.432726,200 117.914138,158.851795 -2.13162821e-14,97.9343734 L0.0120466557,0 L1200.01205,0 Z"
                            fill="#FFFFFF"
                        ></path>
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Craft;
