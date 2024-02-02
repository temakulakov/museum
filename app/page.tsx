'use client'
import styles from "./page.module.css";
import Header from "@/components/header";
import BottomHeader from "@/components/bottomHeader";
import {RecoilRoot, useRecoilState} from "recoil";
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
