import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactSection from './ContactSection';
import MapSection from '../home/MapSection';

import Breadcrumb2 from '../common/breadcrumb/Breadcrumb2';

const ContactMain = () => {
    return (
        <>
            <Breadcrumb2 title='Contact Us' subTitle='Contact' page='contact' />
            <ContactSection />
            {/* <CtaSectionTwo /> */}
            <MapSection />
        </>
    );
};

export default ContactMain;