import React from 'react';
import '../styles/styles.css'
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Body} from '../components/body';


export const Principal=()=>{
    return(
        <div className="sectionPrincipal">
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </div>
    );
}