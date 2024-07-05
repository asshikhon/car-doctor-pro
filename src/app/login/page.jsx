"use client";
import Image from "next/image";
import React from "react";
import signIn from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = signIn("credentials", {
      email,
      password,
      redirect: false,
    });

console.log(resp);

  };

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
          <h2 className="text-3xl font-bold text-center mb-16">Login</h2>
          <form onSubmit={handleLogin} action="">
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
            <button
              type="submit"
              className="btn btn-primary w-full text-white mt-8"
            >
              Sign In
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
            <h6>
              not have account?{" "}
              <Link href={`/signup`} className="underline text-blue-700">
                SignUp
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
