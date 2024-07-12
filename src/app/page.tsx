"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { AuroraBackground } from "../app/components/ui/aurora-background";
import { Vortex } from "../app/components/ui/vortex";
import { TypewriterEffectSmooth } from "../app/components/ui/typewriter-effect";
import { Image } from "@nextui-org/react";
import { LampContainer } from "../app/components/ui/lamp";
import { TracingBeam } from "../app/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";
import { FlipWords } from "../app/components/ui/flip-words";
import { Spotlight } from "../app/components/ui/Spotlight";
import { Meteors } from "../app/components/ui/meteors";

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
            <Button color="primary">LinkedIn</Button>
            <Button className="border border-primary bg-black text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,255,1)] transition duration-200">
              Github
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
                width={500}
                height={600}
                src="https://portofolio-arifhidayat.vercel.app/images/profile.jpg"
                alt="NextUI Album Cover"
                className="m-5"
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
                Email:&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Arifhida1647@gmail.com
              </div>
              <div className="text-base mb-8">
                Phone:&emsp;&emsp;&emsp;&emsp;&emsp;+62-8569-5091-825
              </div>
              <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Download CV
              </Button>
            </div>
          </div>
        </div>
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
      "https://portofolio-arifhidayat.vercel.app/images/kalbe_1.jpg",
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
      "https://portofolio-arifhidayat.vercel.app/images/map.jpg",
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
      "https://portofolio-arifhidayat.vercel.app/images/sertif%20maxy.png",
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
      "https://portofolio-arifhidayat.vercel.app/images/sertif%20progate%20html.png",
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
      "https://portofolio-arifhidayat.vercel.app/images/progate%20js.png",
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
      "https://portofolio-arifhidayat.vercel.app/images/progate%20SAQL.png",
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
      "https://portofolio-arifhidayat.vercel.app/images/rakamin.png",
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
      "https://portofolio-arifhidayat.vercel.app/images/oracle.png",
  },
];