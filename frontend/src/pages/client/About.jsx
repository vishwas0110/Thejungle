import React from 'react';
import Header from '../../components/Home/Header';
import Sidebar from '../../components/Home/Sidebar';

const About = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <div className='pt-20 pl-5 text-xs flex flex-col gap-3'>
                <h1 className='text-center font-bold text-base'>About us</h1>
                <p>Welcome to “ JUNGLE“, where the urban spirit thrives and individuality roars. Born from the bustling streets and pulsating beats, we are more than just a streetwear brand – we're a THE TRIBE .</p>
                <p>In the concrete jungles we call home, we find our strength in unity and our identity in diversity. What binds us together is not just the threads of our garments but the shared pulse of our community. We're not just selling t-shirts; we're weaving the fabric of BROTHERHOOD.</p>
                <p>At JUNGLE, every design tells a story – stories of resilience, rebellion, and the relentless pursuit of passion. Our garments are not just fashion statements; they are symbols of belonging, daring you to stand out while EMBRACING OUR ROOTS  .</p>
                <p>But Jungle is more than just clothing; it's a movement. It's about celebrating the untamed spirit within each of us and recognizing the power of coming together. Whether you're navigating the concrete jungle or exploring uncharted territories, know that you're never alone – you're part of THE JUNGLE FAMILY.</p>
                <p>Join us as we carve our path through the urban wilderness, leaving our mark not just on the streets but on the hearts of those who dare to dream. Together, we are Jungle – united in our diversity, unstoppable in our passion, and bound by the unbreakable ties of brotherhood.</p>
                <p>Welcome to THE JUNGLE . Welcome home.</p>
            </div>
        </div>
    );
};

export default About;