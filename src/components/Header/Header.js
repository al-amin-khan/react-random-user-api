import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className='mb-5 mt-3'>
            <h2 className='text-center'>Radom User API</h2>
            <h5 className='text-center'>A random user profile by fetching data from <a href="https://randomuser.me/" target='_blank'>randomuser.me</a></h5>
        </div>
    );
};

export default Header;