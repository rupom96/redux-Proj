import React from 'react';
import useAuth from '../../hooks/useAuth';

const Career = () => {
    const { user } = useAuth();

    return (
        <div className="mt-5 pt-5 container">
            <h1 className="mb-5">CAREER</h1>
            <div className="text-start">
                <p>Trip-Radar is a world-leading integrated tourism centre. By becoming part of our family, you will work alongside highly trained, multidisciplinary teams, accelerating your learning, challenging your skills and broadening your experience.</p>
                <h4>Why Join Us:</h4>
                <p>Trip-Radar is one of the best tourism industry in Bangladesh. Here are some of our features and achievements which might get suitable for you. <br /><br />
                    • Certified travel agency of Bangladesh Government – Ministry of Civil Aviation and Tourism.<br />
                    • Proud member of Association of Travel Agents of Bangladesh (ATAB).<br />
                    • Proud member of Tour Operators Association of Bangladesh (TOAB).<br />
                    • Active alliances and networking with other agencies to serve its International clientele.<br />
                    • Growing corporate clients.<br />
                    • Accepts Credit Card transactions.<br />
                    • Utilization of GALILEO, AMADEUS and ABACUS, Computerized Reservation Systems for airline ticking, cars and hotel bookings.</p>
                <br />

                <p>Here, by filling up the required informations, you can let us to have the oppurtunity to find out if you are a good fit or not:</p>
                <br />



                <div className="w-75 text-start">

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input defaultValue={user?.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <form className="row g-3">
                        <div className="col-auto">
                            <label htmlFor="inputPassword2" className="form-label">Name</label>
                            <input defaultValue={user?.displayName} type="text" className="form-control" id="inputPassword2" placeholder="Mr. Name" />
                        </div>

                        <div className="col-auto">
                            <label htmlFor="inputPassword2" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="01********" />
                        </div>

                    </form>


                    <div className="mb-3 mt-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Why do you consider yourself as a fit candidate?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>


                    {/* upload cv */}
                    <p>Upload your CV!</p>
                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Uplaod</button>
                    </div>
                    {/* apply button */}
                    <div className="mt-5">
                        <button type="button" className="btn btn-lg btn-primary">Apply!</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Career;