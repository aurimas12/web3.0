import React from 'react';
import Router from '../../routes/Router';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";


const Layout = () => {
    return (<>
        <Header/>
        <div>
            <Router/>
        </div>
        <Footer/>
        </>
    )
}

export default Layout
