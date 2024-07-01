
import Image from "next/image";

const About = () => {
    return (
<div className="hero my-12 px-3 md:px-0 md:my-20 ">
  <div className="hero-content flex-col lg:flex-row">
   <div className="lg:w-1/2 relative">
   <Image src="/assets/images/about_us/person.jpg" alt="logo1"  height={473} width={460} />
   <Image src="/assets/images/about_us/parts.jpg" alt="logo" height={332} width={327} className="absolute left-[50%] top-48 border-[10px] border-white rounded-lg" />
   
   </div>
    <div className="lg:w-1/2 p-4">
      <h3 className="text-3xl text-[#FF3811] font-bold">About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn bg-[#FF3811] text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;