'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import BottomHeader from "@/components/bottomHeader";
import { useRouter } from 'next/router';
import {router} from "next/client";
import {RecoilRoot, useRecoilState} from "recoil";
import {pageAtom} from "@/store/atoms";
import React from "react";
import AnimatedMount from "@/components/AnimatedMount";

export default function Home() {


  return (
      <RecoilRoot>
          <div className={styles.root}>
              <AnimatedMount isVisible={true}>
                  <Header/>
                  <BottomHeader/>
              </AnimatedMount>
          </div>
      </RecoilRoot>
  );
}
