/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import {services} from '../../lib/services'

const Services = () => {
    return (
        <div className='my-12 md:my-20 container mx-auto'>
            <div className='text-center '>
                <h1 className='text-2xl font-bold text-[#FF3811]'>Our Services</h1>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>

<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

{

services?.map((service) => (
    <ServiceCard key={service.id} service={service} />
))

}
</div>

        </div>
    );
};

export default Services;