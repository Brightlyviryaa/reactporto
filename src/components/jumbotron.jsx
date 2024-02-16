import React, { useRef } from 'react';
import jumbotron from './images/jumbotron-image.jpeg';

const Jumbotron = () => {
    const title = "\"Maju menerjang rintangan tanpa batas!\"";
    const description = "Halo, saya Brightly Virya, seorang spesialis dalam pengembangan web full stack. Saya telah tertarik dengan dunia IT sejak usia 13 tahun dan semakin memperdalam minat saya dalam pengembangan perangkat lunak. Saat ini, saya sedang menempuh pendidikan di Universitas Multimedia Nusantara, jurusan Informatika, sejak tahun 2022.";

    const galleryRef = useRef(null);

    const scrollToGallery = () => {
        galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='relative'>
            <section className="z-10 min-h-screen bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover" style={{ backgroundImage: `url(${jumbotron})` }}>
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 data-aos="zoom-in" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{title}</h1>
                    <p data-aos="zoom-in-up" className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{description}</p>
                    <div className="z-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a data-aos="zoom-in-left" href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" onClick={scrollToGallery}>
                            See CV
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a data-aos="zoom-in-right" href="/#galery" onClick={scrollToGallery} className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            My Portfolio
                        </a>
                    </div>
                </div>
            </section>
            <svg className='absolute bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,133.3C384,171,480,245,576,277.3C672,309,768,299,864,261.3C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

        </div>
    );
};

export default Jumbotron;
