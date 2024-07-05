"use client"
import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const SignUpPage = () => {

const handleSignUp =async e => {
    e.preventDefault();
const newUser ={
  name : e.target.name.value,
  email : e.target.email.value,
  password : e.target.password.value,
}
  const resp = await fetch("http://localhost:3000/signup/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
  if(resp.status === 200){
    e.target.reset();
  }
}

  return (
    <div className="container mx-auto my-24">
      <div className="flex justify-around flex-col md:flex-row gap-14">
        <div>
          <Image
            alt="login image"
            src="/assets/images/login/login.svg"
            height={550}
            width={500}
          />
        </div>

        <div className="border rounded-xl p-14 w-[610px]">
          <h2 className="text-3xl font-bold text-center mb-16">SignUp</h2>
<form onSubmit={handleSignUp} action="" >

<label htmlFor="name" className="font-bold">
            Name
          </label>{" "}
          <br />
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            className="input mt-3 mb-4 input-bordered w-full "
          />{" "}
          <br />
<label htmlFor="email" className="font-bold">
            Email
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email Address"
            className="input mt-3 mb-4 input-bordered w-full "
          />{" "}
          <br />
          <label htmlFor="password" className="font-bold">
            Confirm Password
          </label>{" "}
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            className="input mt-3 input-bordered w-full "
          />
          <br />
          <button type="submit" className="btn btn-primary w-full text-white mt-8">
            Sign Up
          </button>

</form>
          <div className="text-center space-y-6 mt-8">
            <h6>or sign in with</h6>
            <div className="flex items-center gap-4 text-center justify-center">
              <button className="btn bg-transparent btn-outline">
                <FcGoogle className="text-3xl " />
              </button>

              <button className="btn bg-transparent btn-outline">
                <FaGithub className="text-3xl " />
              </button>
            </div>
            <h6>Already have an account? <Link href={`/login`} className="underline text-blue-700">Login</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
