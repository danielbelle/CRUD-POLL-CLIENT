import React from 'react';
import ShowEnquete from './ShowEnquete';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='intro'>
            <div className="pt-2 ps-4">
                <Link to="/add" className='btn btn-light btn-lg'>Nova Enquete</Link>
            </div>
            <div className="App container pt-4">
                <div className="row">
                    <div className="col-sm-8 mb-2 mt-2 offset-2">
                        <div className="d-inline-flex p-2">
                            <ShowEnquete />
                        </div>
                    </div>
                    {/*
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-2">
                        <div className="d-inline-flex p-2">
                            <ShowEnquete />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-2">
                        <div className="d-inline-flex p-2">
                            <ShowEnquete />
                        </div>
                    </div>*/}
                </div> 
            </div>
        </div>
    );
}

export default Home;