import React from 'react';
import Navigation from './components/Navigation';
import Jumbotron from './components/jumbotron'
import Timeline from './components/timeline';
import Profile from './components/Profile';
import Galery from './components/projects-galery';
import Footer from './components/footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them

  // Custom settings:
  // container: window, // The element that is used as the viewport for checking elements' visibility
  // rootMargin: '0px', // Margin around the root. Values are similar to css property. Unitless values not allowed
  // threshold: 0 // percentage of an element's area that needs to be visible to consider an element in the viewport
});

const Portfolio = () => {
  return (
    <>
      <Jumbotron />
      <Profile />
      <Timeline />
      <Galery />
      <Footer />
    </>
  );
}

export default Portfolio;
