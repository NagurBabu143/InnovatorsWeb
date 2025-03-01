import React from 'react';

import Careers from './Components/Careers/Careers';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Navbar/Navbar';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Careers />
            <Footer />
        </div>
    );
};

export default App;
