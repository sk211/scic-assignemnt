import React from "react";
import Ab from "../Ab/Ab";

import Footer from "../Footer/Footer";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";

import Manu from "../Manu/Manu";
import HeaderTop from './../Header/HeaderTop';
import HederMeddle from './../Header/HederMeddle';

export default function Home() {
    return (
        <div>
            <HeaderTop />
            <HederMeddle />
            <Manu />
            <Ab/>
            <Login/>
            <Register/>
           
           

        </div>
    )
}
