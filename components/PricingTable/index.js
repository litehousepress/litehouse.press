import Slide from 'react-reveal/Slide';
function PricingTable(props) {
    return (
        <section className="section section--inverted" id="pricing">
            <div className="plans">
                <div className="plan">
                    <h2 className="headline">Long Tail</h2>
                    <h3 className="description">For individuals</h3>
                    <div className="price">
                        $40<span>/month</span>
                    </div>
                    <ul>
                        <li>SaaS</li>
                        <li>
                            Amazon CloudFront CDN<sup>*</sup>
                        </li>
                        <li>Export to HTML</li>
                        <li>
                            Deployment to AWS<sup>*</sup>
                        </li>
                        <li>Support via ticketing</li>
                    </ul>
                </div>
                <div className="plan">
                    <h2 className="headline">News Room</h2>
                    <h3 className="description">For groups</h3>
                    <div className="price">
                        $499<span>/month</span>
                    </div>
                    <ul>
                        <li>SaaS</li>
                        <li>
                            Amazon CloudFront CDN<sup>*</sup>
                        </li>
                        <li>Export to HTML</li>
                        <li>
                            Deployment to AWS<sup>*</sup>
                        </li>
                        <li>Support via ticketing</li>
                        <li>Custom Templates</li>
                    </ul>
                </div>
                <div className="plan">
                    <h2 className="headline">Publishing House</h2>
                    <h3 className="description">For professional news organizations</h3>
                    <div className="price">
                        $1,599<span>/month</span>
                    </div>
                    <ul>
                        <li>SaaS / On-prem</li>
                        <li>
                            Amazon CloudFront CDN<sup>*</sup>, Custom CDN
                        </li>
                        <li>Export to HTML</li>
                        <li>
                            Deployment to AWS<sup>*</sup>
                        </li>
                        <li>Premium 24/7 support</li>
                        <li>Custom Templates</li>
                        <li>CMS Integration</li>
                        <li>Deployment to custom CMS</li>
                        <li>White labeling of content</li>
                    </ul>
                </div>
                <div className="plan">
                    <h2 className="headline">Developer's License</h2>
                    <h3 className="description">For custom development & integration</h3>
                    <div className="price">
                        $2,599<span>/month</span>
                    </div>
                    <ul>
                        <li>SaaS / On-prem</li>
                        <li>
                            Amazon CloudFront CDN<sup>*</sup>, Custom CDN
                        </li>
                        <li>Export to HTML</li>
                        <li>
                            Deployment to AWS<sup>*</sup>
                        </li>
                        <li>Premium 24/7 support</li>
                        <li>Custom Templates</li>
                        <li>CMS Integration</li>
                        <li>Deployment to custom CMS</li>
                        <li>Full white labeling</li>
                        <li>
                            Access to source code<sup>**</sup>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="plans plans--full">
                <div className="plan">
                    <h2 className="headline">Custom Work</h2>
                    <div className="price">
                        $160<span>/hour</span>
                    </div>
                    <p>For Developer's & License plan, fee is $145/hour</p>
                </div>

                <div className="plan">
                    <h2 className="headline">Premium Themes</h2>
                    <div className="price">
                        $45<span>/unit</span>
                    </div>
                    <p>
                        Premium themes are included in Publishing House & Developer's License plans
                        for free
                    </p>
                </div>

                <div className="plan">
                    <h2 className="headline">Discount Program</h2>
                    <div className="price">
                        10%<span></span>
                    </div>
                    <p>
                        For NGO’s and GRO's, we are offering a 10% discount on all license fees and
                        hour rates
                    </p>
                </div>
            </div>

            <div className="disclaimer">
                <p>
                    *) Running costs and fees for running custom CDNs, Amazon CloudFront quotas fees
                    or any other 3rd party tools are not included in the license price.
                </p>
                <p>
                    **) For the Developer’s License, we are offering access to the code-base on a
                    separate custom branch. On this branch, customers can commit new features/fixes/
                    integrations. The code is licensed for contract purposes only. Customer doesn’t
                    have any ownership rights - e.g. rights to sell or offer code to 3rd parties
                    without previous agreement with Litehouse s.r.o.
                </p>
            </div>
        </section>
    );
}

export default PricingTable;
