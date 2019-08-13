import './Products.scss';

function Products(props) {
    return (
        <section className="section-products" id="products">
            <div className="container">
                <h2>Our Products</h2>
                <h3>Meet the Litehouse family</h3>
                <p className="lead">
                    We are a team of experienced journalists, storytellers, developers, designers
                    and creative experts that are building platforms tailored to the needs of modern
                    news organizations and freelance journalists.
                </p>
                <ul>
                    <li>
                        <svg viewBox="0 0 59 75">
                            <g fill="#5684fd" fill-rule="evenodd">
                                <path d="m25 50h33.333333v25h-33.333333z" opacity=".797573" />
                                <path d="m25 0h33.333333v25h-33.333333z" opacity=".795108" />
                                <path d="m12.5 12.5 12.5-12.5v25h-25z" />
                                <path d="m0 50h25v25l-12.5-12.5z" />
                                <path d="m0 25h25v25h-25z" opacity=".703334" />
                            </g>
                        </svg>
                        <h4>Litehouse Craft</h4>
                        <p>
                            Revolutionary easy-to-use storytelling tool for journalists and
                            advertising specialists.
                        </p>
                    </li>
                    <li>
                        <svg viewBox="0 0 75 75">
                            <g fill="#f24545" fill-rule="evenodd">
                                <path d="m0 0h25v75h-25z" opacity=".700498" />
                                <path d="m50 0h25v75h-25z" opacity=".694661" />
                                <path d="m25 37.5h25l-25 37.5h-25z" opacity=".60319" />
                                <path
                                    d="m50 37.5h25l-25 37.5h-25z"
                                    opacity=".602353"
                                    transform="matrix(-1 0 0 1 100 0)"
                                />
                            </g>
                        </svg>
                        <h4>Litehouse Wire</h4>
                        <p>Customizable and versatile news aggregation tool for journalists.</p>
                    </li>
                    <li>
                        <svg viewBox="0 0 50 75">
                            <g fill="#ffab00" fill-rule="evenodd">
                                <path
                                    d="m0 12.5 6.25-6.25 6.25-6.25h37.5v24.8333333h-37.5-12.5z"
                                    opacity=".799805"
                                />
                                <path
                                    d="m0 33.1666667v-8.3333334-12.3333333l50 29.1666667v8.3333333 12.5z"
                                    opacity=".600539"
                                />
                                <path
                                    d="m0 62.5 6.25-6.25 6.25-6.25h37.5v25h-37.5-12.5z"
                                    opacity=".797689"
                                    transform="matrix(-1 0 0 -1 50 125)"
                                />
                            </g>
                        </svg>
                        <h4>Litehouse Studio</h4>
                        <p>
                            All-in-one development studio tailored to the needs of data-driven
                            journalism.
                        </p>
                    </li>
                    <li>
                        <svg viewBox="0 0 75 75">
                            <g fill="#15d1a9" fill-rule="evenodd">
                                <path d="m0 0h25v75h-25z" opacity=".8" />
                                <path d="m50 0h25v75h-25z" opacity=".6" />
                                <path d="m0 0h25l50 75h-25z" opacity=".8" />
                            </g>
                        </svg>
                        <h4>Litehouse Newsroom</h4>
                        <p>
                            Ultimate content management system built by journalists for journalists.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Products;
