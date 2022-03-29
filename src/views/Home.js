import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import BlogSection from '../components/sections/BlogSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import SubscribeSection from '../components/sections/SubscribeSection';

const Home = () => {

  return (
    <>
      <AboutSection className="illustration-section-01" />
      <FeaturesSection />
      <BlogSection invertMobile topDivider imageFill className="illustration-section-02" />
      <TestimonialSection topDivider />
      <SubscribeSection split />
    </>
  );
}

export default Home;