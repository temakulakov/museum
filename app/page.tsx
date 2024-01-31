'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import BottomHeader from "@/components/bottomHeader";
import { useRouter } from 'next/router';
import {router} from "next/client";
import {arr} from "@/data";
import {number} from "prop-types";
import {RecoilRoot, useRecoilState} from "recoil";
import {pageAtom} from "@/store/atoms";
import React from "react";

export default function Home() {


  return (
      <RecoilRoot>
          <div className={styles.root}>
              <Header/>
              <BottomHeader/>
          </div>
      </RecoilRoot>
  );
}
