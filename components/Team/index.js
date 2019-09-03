function Products(props) {
    return (
        <section className="section" id="team">
            <div className="container--full">
                <svg viewBox="0 0 1202 200" className="decoration-top">
                    <path
                        d="M1201,0 L1201.01739,97.9316112 C1083.1047,158.850551 858.583214,200 601,200 C343.420679,200 118.902091,158.851795 0.987953344,97.9343734 L1,0 L1201,0 Z"
                        fill="#5684FD"
                    ></path>
                </svg>
            </div>
            <div className="container">
                <h2>Meet The Team</h2>
                <p className="lead">
                    Years of co-operation with media houses, freelance journalists and NGOs brought
                    us together.
                </p>
                <div className="container-flex container-flex--rev team-mate">
                    <div>
                        <h3>Tomáš Randus</h3>
                        <h4>Chief Technology Officer, co-founder</h4>
                        <p>
                            Software engineer and enthusiastic innovator with a strong background in
                            media literacy and education. During the last two decades, he worked for
                            media houses and business companies including Sanoma Media, Radio Free
                            Europe/Radio Liberty, and Citrix. In the past, he founded or was a part
                            of several startup companies.
                        </p>
                    </div>
                    <img src="/static/team/tomas.png" className="team-right" />
                </div>

                <div className="container-flex team-mate">
                    <img src="/static/team/jan.png" className="team-left" />
                    <div>
                        <h3>Jan Rádl</h3>
                        <h4>Chief Design Officer, co-founder</h4>
                        <p>
                            Former Web Designer and Lead Data Visualization Designer at Radio Free
                            Europe/Radio Liberty - his team’s storytelling projects won or has been
                            nominated for several widely recognized journalistic awards including
                            Association for International Broadcasting Award, Lovie Award or Webby
                            Award. Before joining RFE/RL he worked as a photo-journalist and
                            reporter for various Czech media houses. In 2017 he joined the Czech
                            branch of Doctors Without Borders as a pro-bono visualization designer
                            and digital storyteller.
                        </p>
                    </div>
                </div>

                <div className="container-flex container-flex--rev  team-mate">
                    <div>
                        <h3>Glenn Kates</h3>
                        <h4>Digital Media Specialist</h4>
                        <p>
                            Former Managing Editor for Digital at Current Time - Radio Free Europe
                            TV channel - the first news organization in the Russian-language news
                            market to pursue a distributed content model, focusing on adapting video
                            content for mobile and social audiences. Before joining RFE/RL in 2012,
                            he worked as a journalist at the Moscow bureau of The New York Times,
                            where he monitored and wrote about Russian social media. His work has
                            been published in The New York Times, The Guardian, The Atlantic and
                            other media.
                        </p>
                    </div>
                    <img src="/static/team/glenn.png" className="team-right" />
                </div>

                <div className="container-flex team-mate">
                    <img src="/static/team/lukas.png" className="team-left" />
                    <div>
                        <h3>Lukáš Král</h3>
                        <h4>Software Architect</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
                            neque ac lobortis pretium. Aenean sed mauris mauris. Donec mi mauris,
                            ultricies non risus at, rutrum faucibus est. Vivamus semper fermentum
                            orci sit amet bibendum. Proin pretium nibh ac augue hendrerit rutrum.
                            Integer elementum, risus sit amet fringilla mattis, augue purus porta
                            diam, sed auctor quam lacus ut neque. Fusce ut purus vel felis fringilla
                            tincidunt. Fusce eleifend felis id finibus consequat. In ex ex, tempus a
                            risus nec, tempor aliquet arcu. Praesent suscipit ut erat eget varius.
                            Pellentesque metus turpis, rhoncus non gravida at, bibendum tincidunt
                            nibh. Aliquam ut diam tellus.
                        </p>
                    </div>
                </div>

                <div className="container-flex container-flex--rev team-mate">
                    <div>
                        <h3>Roman Schejbal</h3>
                        <h4>Innovation Specialist</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
                            neque ac lobortis pretium. Aenean sed mauris mauris. Donec mi mauris,
                            ultricies non risus at, rutrum faucibus est. Vivamus semper fermentum
                            orci sit amet bibendum. Proin pretium nibh ac augue hendrerit rutrum.
                            Integer elementum, risus sit amet fringilla mattis, augue purus porta
                            diam, sed auctor quam lacus ut neque. Fusce ut purus vel felis fringilla
                            tincidunt. Fusce eleifend felis id finibus consequat. In ex ex, tempus a
                            risus nec, tempor aliquet arcu. Praesent suscipit ut erat eget varius.
                            Pellentesque metus turpis, rhoncus non gravida at, bibendum tincidunt
                            nibh. Aliquam ut diam tellus.
                        </p>
                    </div>
                    <img src="/static/team/roman.png" className="team-right" />
                </div>
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

export default Products;
