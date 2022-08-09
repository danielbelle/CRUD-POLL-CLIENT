import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">Enquetes</Link>
            </li>
            <li>
                <Link to="/AddEnquete">Nova Enquete</Link>
            </li>
        </ul>
    );
}
export default Navbar; 