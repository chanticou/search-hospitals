import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { MainPage } from "./MainPage";
const inter = Inter({ subsets: ["latin"] });

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MyFirstAplication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MainPage />
      </div>
    </>
  );
}
