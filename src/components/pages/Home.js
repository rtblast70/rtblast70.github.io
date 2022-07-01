import React from 'react';
import '../../App.css';
import Section from '../Section';

function Home () {
    return (
        <>
            <Section media="img" 
                        url='../../../public/images/bench.JPEG' 
                        type="homepage" 
                        title="Hi, I'm Ryan" 
                        subtitle="CP SLO Software Engineering '23"/>
        </>
    );
}

export default Home;