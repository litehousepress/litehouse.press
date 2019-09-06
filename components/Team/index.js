import Fade from 'react-reveal/Fade';
function Products(props) {
    return (
        <section className="section section--inverted" id="team">
            <div className="container">
                <h2>
                    <Fade>Meet The Team</Fade>
                </h2>
                <p className="lead">
                    <Fade>
                        Years of co-operation with media houses, freelance journalists and NGOs
                        brought us together.
                    </Fade>
                </p>
            </div>
            <div className="container container--flex container--flex-reversed">
                <Fade right>
                    <img src="/static/team/tomas.png" className="margin-left" />
                    <div
                        className="avatar"
                        style={{backgroundImage: 'url(/static/team/tomas-avatar.png)'}}
                    ></div>
                </Fade>
                <Fade left>
                    <div>
                        <h3>Tomáš Randus</h3>
                        <h4>Chief Technology Officer, co-founder</h4>
                        <p>
                            Years of cooperation with media houses, freelance journalists and NGOs
                            brought us together. Software engineer and enthusiastic innovator with a
                            extensive experience in media literacy and education. Over the last two
                            decades, he has worked in media and business environments at Sanoma
                            Media, Radio Free Europe/Radio Liberty, and Citrix. He has also founded,
                            or been a part of, several startup companies. Tomáš earned a Masters in
                            New Media from Charles University in Prague.
                        </p>
                    </div>
                </Fade>
            </div>

            <div className="container container--flex">
                <Fade left>
                    <img src="/static/team/jan.png" className="margin-right" />
                    <div
                        className="avatar"
                        style={{backgroundImage: 'url(/static/team/jan-avatar.png)'}}
                    ></div>
                </Fade>
                <Fade right>
                    <div>
                        <h3>Jan Rádl</h3>
                        <h4>Chief Design Officer, co-founder</h4>
                        <p>
                            The former Lead Data Visualization Designer and Web Designer at Radio
                            Free Europe/Radio Liberty - his team’s storytelling projects won or were
                            nominated for several prestigious journalistic awards, including the
                            Association for International Broadcasting Award, the Lovie Award and
                            the Webby Award. Before joining RFE/RL he worked as a photojournalist
                            and reporter for Czech media, including Reflex, Denik and TV Nova. In
                            2017 he joined the Czech branch of Doctors Without Borders as a pro-bono
                            visualization designer and digital storyteller.
                        </p>
                    </div>
                </Fade>
            </div>

            <div className="container container--flex container--flex-reversed">
                <Fade right>
                    <img src="/static/team/glenn.png" className="margin-left" />
                    <div
                        className="avatar"
                        style={{backgroundImage: 'url(/static/team/glenn-avatar.png)'}}
                    ></div>
                </Fade>
                <Fade left>
                    <div>
                        <h3>Glenn Kates</h3>
                        <h4>Consultant</h4>
                        <p>
                            Previously serving as RFE/RL’s Digital Editor and Managing Editor for
                            Current Time Digital, an innovative Russian language news brand where he
                            oversaw explosive growth, Glenn consults on journalism and media
                            innovation in Central and Eastern Europe. Glenn also worked as a
                            journalist at the Moscow bureau of The New York Times, where he
                            monitored and wrote about Russian social media. His work has been
                            published in The New York Times, The Guardian, The Atlantic and other
                            media.
                        </p>
                    </div>
                </Fade>
            </div>

            <div className="container container--flex">
                <Fade left>
                    <img src="/static/team/lukas.png" className="margin-right" />
                    <div
                        className="avatar"
                        style={{backgroundImage: 'url(/static/team/lukas-avatar.png)'}}
                    ></div>
                </Fade>
                <Fade right>
                    <div>
                        <h3>Lukáš Král</h3>
                        <h4>Software Architect</h4>
                        <p>
                            Former lead front-end engineer at Radio Free Europe/Radio Liberty.
                            Full-stack software developer with deep knowledge of business
                            applications and publishing platforms. Microsoft Typescript expert, data
                            layer & tooling specialist. In 2008, he earned his Masters degree from
                            Czech Technical University in Prague.
                        </p>
                    </div>
                </Fade>
            </div>

            <div className="container container--flex container--flex-reversed">
                <Fade right>
                    <img src="/static/team/roman.png" className="margin-left" />
                    <div
                        className="avatar"
                        style={{backgroundImage: 'url(/static/team/roman-avatar.png)'}}
                    ></div>
                </Fade>
                <Fade left>
                    <div>
                        <h3>Roman Schejbal</h3>
                        <h4>Innovation Specialist</h4>
                        <p>
                            Tutor and deeply skilled software development engineer with expertise in
                            code optimization, neural networking, and machine learning. Over the
                            last decade, he has helped many worldwide startups and corporates with
                            performance issues and code refactoring. He permanently contributes to
                            the front-end community as a tutor and co-organizer of ReasonML Prague
                            meetups.
                        </p>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Products;
