import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const ServiceCard = ({service}) => {
    return (
        <div className="card border rounded-xl p-6 card-compact w-96">
  <figure>
   <Image alt={service.title} src={service?.img || {}} height={210} width={315}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[25px] font-bold text-[#444444]">{service.title}</h2>
    
    <div className="flex justify-between text-[20px] font-bold mt-4 text-[#FF3811]">
      <h5 className=''>Price : {service.price}</h5>
      <IoMdArrowForward className='text-2xl' />

    </div>
  </div>
</div>
    );
};

export default ServiceCard;