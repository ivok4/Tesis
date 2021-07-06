import {Layout, Register as RegisterContainer} from '../containers'
import React from "react";
import {useAppContext} from '../contexts/Auth'


export default function libreria() {
  const  userInfo  = useAppContext();
  console.log(userInfo);
  return (
    <>
    <Layout>
      Libreria
    </Layout>
    </>
  )
}