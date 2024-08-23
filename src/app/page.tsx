"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Vortex } from "../app/components/ui/vortex";
import { TypewriterEffectSmooth } from "../app/components/ui/typewriter-effect";
import { Image } from "@nextui-org/react";
import { LampContainer } from "../app/components/ui/lamp";
import { TracingBeam } from "../app/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import { FlipWords } from "../app/components/ui/flip-words";
import { Meteors } from "../app/components/ui/meteors";
import { HoverEffect } from "../app/components/ui/card-hover-effect";
import { LinkPreview } from "../app/components/ui/link-preview";
import { Card, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles.css';

export default function Home() {
  const words = [
    {
      text: "I'am",
      className: "text-blue text-sm md:text-4xl max-w-xl mt-6 text-center",
    },
    {
      text: "Web",
      className: "text-white text-sm md:text-4xl max-w-xl mt-6 text-center",
    },
    {
      text: "Developer.",
      className: "text-primary text-sm md:text-4xl max-w-xl mt-6 text-center",
    },
  ];
  return (
    <>
      <div className="min-h-screen">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 min-h-screen"
        >
          <h2 className="text-white text-2xl md:text-6xl font-semibold text-center">
            Arif Hidayat
          </h2>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button color="primary"><LinkPreview url="https://www.linkedin.com/in/arif-hidayat-332825184/">LinkedIn</LinkPreview></Button>
            <Button className="border border-primary bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,255,1)] transition duration-200">
              <LinkPreview url="https://github.com/arifhida1647">Github</LinkPreview>
            </Button>
          </div>
        </Vortex>
      </div>
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <div className="w-full px-4">
          <div className="flex flex-col sm:flex-row md:items-center gap-4 w-full">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                isBlurred
                width="100%" // Use width 100% for responsive behavior
                height={600}
                src="https://portofolio-temp.vercel.app/images/profile.jpg"
                alt="NextUI Album Cover"
                className="m-5 sm:w-[300px] md:w-[500px]"
              />
            </div>
            <div className="w-full md:w-1/2 text-white">
              <div className="md:text-4xl font-semibold mb-5">About Me</div>
              <div className="text-base mb-5">
                Product Manager Intern at PT Kalbe Farma, Tbk | Undergraduate
                <br />
                Informatics Student at UPN Veteran Jakarta
              </div>
              <div className="text-base mb-2">
                Name:&emsp;&emsp;&emsp;&emsp;&emsp;Arif Hidayat
              </div>
              <div className="text-base mb-2">
                Date of birth:&emsp;&emsp;Januari 14, 2003
              </div>
              <div className="text-base mb-2">
                Address:&emsp;&emsp;&emsp;&emsp;Tangerang Selatan, Rempoa
              </div>
              <div className="text-base mb-2">
                Zip code:&emsp;&emsp;&ensp;&ensp;&ensp;&ensp;15412
              </div>
              <div className="text-base mb-2">
                Email:&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;arifhidayat@arifhida.my.id
              </div>
              <div className="text-base mb-8">
                Phone:&emsp;&emsp;&emsp;&emsp;&emsp;+62-8569-5091-825
              </div>
              <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                <LinkPreview url="https://docs.google.com/document/d/1yGqyj63KuKWhMQrEivfvMMPuzYxFg0kIe3V-6oNRwXM/edit?usp=sharing">Download CV</LinkPreview>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 min-h-screen md:flex items-center justify-center">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            My Project <br /> Overview.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Please Visit <span className="primary underline"> <LinkPreview url="https://github.com/arifhida1647" className="font-bold">
              My Github</LinkPreview></span> See all My repository
          </p>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi UPN Sehat
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/UPNSehat.jpg"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Aplikasi Reminder Obat dan berisi informasi mengenai kesehatan, aplikasi ini dibuat
                    dengan Express JS + HTML + Tailwind UI dan database Firebase
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://upn-sehat.vercel.app/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 mt-2 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/projectService.git">View Github</a>
                  </button>
                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi UPN Sehat
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/porto-3.jpg"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Aplikasi Reminder Obat dan berisi informasi mengenai kesehatan, aplikasi ini dibuat
                    dengan Express JS + Next JS + Shadcn UI dan database Firebase
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://upn-sehat-next-js.vercel.app/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 mt-2 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/UPNSehat-NextJs.git">View Github</a>
                  </button>
                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi Laundry
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/porto-4.jpg"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Webiste ini untuk memesan layanan laundry secara online, dibuat menggunakan framework PHP
                    Codeigniter dan database nya MySql
                  </p>
                  <button className="border px-4 py-1 mb-2 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://sneakslab-admin.my.id/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/senaklab-frontend.git">View Github</a>
                  </button>
                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi Dashboard Laundry
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/porto-6.jpg"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Dashborad dibuat untuk melakukan pengelohan data pada aplikasi pemesanan laundry yang telah saya buat sebelumnya,
                    dibuat menggunakan CodeIgniter + AdminLTE
                  </p>

                  <button className="border px-4 py-1 mb-2 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://dashboard.sneakslab-admin.my.id/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/sneaklab_project.git">View Github</a>
                  </button>


                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi Point Of Sale
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/porto-7.png"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Dashborad dibuat untuk melakukan Jual Beli dan pengaturan stok pada sebuah warung,
                    dibuat menggunakan CodeIgniter + AdminLTE
                  </p>
                  <button className="border px-4 py-1 mb-2 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://tokosembakoleon.my.id/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/sneaklab_project.git">View Github</a>
                  </button>


                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi SIJAGO
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/porto-2.png"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Aplikasi SIJAGO dibuat menggunakan PHP Native + Bootstrap, dan dibuat menggunakan database MySql
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://sijago.arifhida.my.id/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/sijago-PHP.git">View Github</a>
                  </button>


                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Aplikasi FULUS
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/FulusBanner.jpg"
                  />
                  <p className="font-normal text-base text-slate-500 my-12  relative z-50">
                    Dibuat menggunakan bahasa JAVA dan Express JS pada android studio dan database Firebase
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/Fulus-MobileApps.git">View Github</a>
                  </button>


                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Protoype Aplikasi DICASH
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/figma.png"
                  />
                  <p className="font-normal text-base text-slate-500 my-14 relative z-50">
                    Prototype Aplikasi Dompet Digital yang dibuat menggunakan figma
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://www.figma.com/proto/NFFwdR8WeAE9qeZQJgvk16/IMK?type=design&node-id=341-723&t=O2ZFz5Sj1oBeLfRd-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=422%3A5457&show-proto-sidebar=1&mode=design">View Figma</a>
                  </button>


                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Aplikasi Elemes.id
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/porto-5.jpg"
                  />
                  <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                    Aplikasi Ini dibuat menggunakan Next Js + Tailwind UI sebagai aplikasi frontend saja
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://test-elemes.vercel.app">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 rounded-lg mt-2 border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/test-elemes.git">View Github</a>
                  </button>

                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className=" w-full relative max-w-xl">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-2 w-2 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                      />
                    </svg>
                  </div>

                  <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                    Web Frontend LMS
                  </h1>
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://portofolio-temp.vercel.app/images/vueJs1.png"
                  />
                  <p className="font-normal text-base text-slate-500 my-5 relative z-50">
                    Aplikasi forntend ini dibuat menggunakan framework Vue JS  + Tailwind UI
                  </p>
                  <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                    <a href="https://vuejs-route.vercel.app#/">View Demo</a>
                  </button>
                  <button className="border px-4 py-1 rounded-lg mt-2 border-gray-500 text-gray-300">
                    <a href="https://github.com/arifhida1647/VuejsRoute.git">View Github</a>
                  </button>

                  {/* Meaty part - Meteor effect */}
                  <Meteors number={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-slate-950 pb-12">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 bg-slate-950  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            My<FlipWords words={["Education", "Experience", "Certificate"]} />
          </motion.h1>
        </LampContainer>
        <TracingBeam className="px-12">
          <div className="max-w-2xl mx-auto antialiased relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-slate-950 text-white rounded-full text-sm w-fit py-1 mb-4">
                  {item.badge}
                </h2>
                <p className="text-xl mb-4">
                  {item.title}
                </p>
                <div className="text-sm prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
      <div className="bg-slate-950 min-h-screen md:flex items-center justify-center">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-[300px]"
        >
          <SwiperSlide>
            <Card className="bg-black text-white py-10 border-2 border-red-500">
              <CardBody>
                <p className="text-2xl">Address</p>
                <p className="text-base my-5">Tangerang Selatan, 15412</p>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="bg-black text-white py-10 border-2 border-red-500">
              <CardBody>
                <p className="text-2xl">Contact Number</p>
                <p className="text-base my-5">085695091825</p>
              </CardBody>
            </Card>
          </SwiperSlide >
          <SwiperSlide>
            <Card className="bg-black text-white py-10 border-2 border-red-500">
              <CardBody>
                <p className="text-2xl">Email Address</p>
                <p className="text-base my-5">arifhida1647@gmail.com</p>
              </CardBody>
            </Card>
          </SwiperSlide>

        </Swiper >
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            My Contact.
          </h1>
        </div>
      </div >
    </>
  );
}

const dummyContent = [
  {
    title: "EDUCATION",
    description: (
      <>
        <p className="text-xl font-semibold mb-3">

        </p>
      </>
    ),
    badge: "",
    image:
      "",
  },
  {
    title: "UPN Veteran Jakarta",
    description: (
      <>
        <p className="text-xl font-semibold mb-3">
          Informatika, GPA 3.87
        </p>
      </>
    ),
    badge: "2021 - Present",
    image:
      "",
  },
  {
    title: "EXPERIENCE",
    description: (
      <>
        <p className="text-xl font-semibold mb-3">

        </p>
      </>
    ),
    badge: "",
    image:
      "",
  },
  {
    title: "PT Kalbe Farma",
    description: (
      <>
        <p className="text-xl font-semibold mb-3">
          Product Manager Intern
        </p>
        <p>
          Peran ini melibatkan beberapa tanggung jawab penting dalam mendukung manajemen
          proyek di bidang Corporate Digital Technology, termasuk pemeliharaan dokumentasi
          proyek untuk memastikan semua dokumen tersimpan rapi dan mudah diakses, serta berkontribusi
          pada pembuatan dan pemeliharaan jadwal proyek agar tugas diselesaikan tepat waktu. Selain itu,
          peran ini mencakup membantu manajer proyek dalam menyiapkan laporan status dan presentasi untuk
          memberikan gambaran jelas tentang perkembangan proyek kepada para pemangku kepentingan.
        </p>
        <p>
          Tanggung jawab lainnya adalah melakukan penelitian untuk memberikan wawasan yang dapat meningkatkan
          proses manajemen proyek, seperti analisis praktik terbaik, evaluasi alat baru, dan studi tren industri,
          dengan tujuan meningkatkan efisiensi dan efektivitas manajemen proyek secara keseluruhan.
        </p>
      </>
    ),
    badge: "November 2023 - Present",
    image:
      "https://portofolio-temp.vercel.app/images/kalbe_1.jpg",
  },
  {
    title: "PT GTech Digital Asia",
    description: (
      <>
        <p className="text-xl font-semibold mb-3">
          Web Operations Intern
        </p>
        <p>
          Berperan penting dalam tim WebOps MapClub.com, bertanggung jawab atas pembaruan beranda promosi,
          penciptaan promosi halaman arahan baru, dan penjadwalan pembaruan rutin. Selain itu, Anda juga terlibat
          dalam strategi penangkapan promosi yang efektif untuk menarik perhatian pengguna. Di samping itu, Anda
          juga berkontribusi dalam menyiapkan proyek pembaharuan situs mapclub.com, memastikan peningkatan dan
          perbaikan terus-menerus untuk pengalaman pengguna yang lebih baik
        </p>
        <p>
          Selain itu, Anda memainkan peran penting dalam mengelola web offline store MapClub,
          memastikan kualitas dan konsistensi pengalaman pengguna di seluruh platform daring dan luring.
          Dengan portofolio pekerjaan yang luas,
          Anda membawa nilai tambah yang signifikan bagi kesuksesan tim dan perusahaan secara keseluruhan.
        </p>
      </>
    ),
    badge: "Oktober 2023 - Desember 2023",
    image:
      "https://portofolio-temp.vercel.app/images/map.jpg",
  },
  {
    title: "Maxy Academy",
    description: (
      <>
        <p className="text-xl font-semibold mb-5">
          Front End Developer Bootcamp
        </p>
        <p>
          bertanggung jawab untuk membuat website menggunakan framework Bootstrap 4,
          merancang website backend view menggunakan Admin LTE, mengintegrasikan framework
          Semantic UI dan Bootstrap dalam pembuatan website, menerapkan AJAX untuk fungsionalitas website,
          mengembangkan website App menggunakan framework7, serta membangun project website menggunakan
          VueJS dan ReactJS.
        </p>
      </>
    ),
    badge: "September 2023 - Oktober 2023",
    image:
      "https://portofolio-temp.vercel.app/images/sertif%20maxy.png",
  },
  {
    title: "CERTIFICATE",
    description: (
      <>
        <p className="text-xl font-semibold mb-3">

        </p>
      </>
    ),
    badge: "",
    image:
      "",
  },
  {
    title: "Kursus HTML & CSS - Progate",
    description: (
      <>
        <p className="text-xl font-semibold mb-2">

        </p>
      </>
    ),
    badge: "Oktober 2021",
    image:
      "https://portofolio-temp.vercel.app/images/sertif%20progate%20html.png",
  },
  {
    title: "Kursus Javascript - Progate",
    description: (
      <>
        <p className="text-xl font-semibold mb-2">

        </p>
      </>
    ),
    badge: "Oktober 2021",
    image:
      "https://portofolio-temp.vercel.app/images/progate%20js.png",
  },
  {
    title: "Kursus SQL - Progate",
    description: (
      <>
        <p className="text-xl font-semibold mb-2">

        </p>
      </>
    ),
    badge: "Oktober 2021",
    image:
      "https://portofolio-temp.vercel.app/images/progate%20SAQL.png",
  },
  {
    title: "Data Science Class - Rakamin Academy",
    description: (
      <>
        <p className="text-xl font-semibold mb-2">

        </p>
      </>
    ),
    badge: "Oktober 2021",
    image:
      "https://portofolio-temp.vercel.app/images/rakamin.png",
  },
  {
    title: "Java Foundations Oracle Academy",
    description: (
      <>
        <p className="text-xl font-semibold">

        </p>
      </>
    ),
    badge: "November 2022",
    image:
      "https://portofolio-temp.vercel.app/images/oracle.png",
  },
];

const projects = [
  {
    title: "Address",
    description:
      "Tangerang Selatan, 15412",
    link: "/",
  },
  {
    title: "Contact Number",
    description:
      "085695091825",
    link: "/",
  },
  {
    title: "Email Address",
    description:
      "arifhida1647@gmail.com",
    link: "/",
  },
  {
    title: "LinkedIn",
    description:
      "Arif Hidayat",
    link: "https://www.linkedin.com/in/arif-hidayat-332825184/",
  },
  {
    title: "Github",
    description:
      "Arif Hidayat",
    link: "https://github.com/arifhida1647",
  },
];