import React from 'react';
import '../../App.css';
import Section from '../Section';
import toast, {Toaster} from 'react-hot-toast';

function Home () {
    const notify = () => toast("Still under construction :)");

    return (
        <>
            <Section media="img" 
                        type="homepage" 
                        title="Hi, I'm Ryan" 
                        subtitle="CP SLO Software Engineering '23">
            {notify}
            </Section>
        </>
    );
}

export default Home;