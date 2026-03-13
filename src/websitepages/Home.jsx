import React from "react";
import Carsouel from "../components/Carsouel";
import ContextProvider from "../../store/DataContext";
import Loader from "../components/Loader";
import Components from "../components/components";
import Midbanner from "../components/Midbanner";
import Supportsection from "../components/Supportsection";
import Homefooter from "../components/Homefooter";
export default function Home() {
  return (
    <>
      <ContextProvider>
        
        <Loader></Loader>
        <Carsouel></Carsouel>
        <Components></Components>
        <Midbanner></Midbanner>
        <Supportsection></Supportsection>
       < Homefooter></ Homefooter>
        
      </ContextProvider>
    </>
  );
}
