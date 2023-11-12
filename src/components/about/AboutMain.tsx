import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import MissionSection from './MissionSection';
import TestimonialSection from '../home/TestimonialSection';
import FunFactSection from '../homeTwo/FunFactSection';
import AboutWhyWeSection from './AboutWhyWeSection';


const AboutMain = () => {
    return (
        <>
            <Breadcrumb title='About Us' subTitle='About Us' page='about' />
            <MissionSection />
            <TestimonialSection testimonial_space="testimonial-area pt-85 pb-50" />
            <AboutWhyWeSection />
        </>
    );
};

export default AboutMain;