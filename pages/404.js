import {Layout, Register as RegisterContainer} from '../containers'
import React from "react";
import {useAppContext} from '../contexts/Auth'


export default function cuatro0cuatro() {
  const  userInfo  = useAppContext();
  console.log(userInfo);
  return (
    <>
    <Layout>
      404
    </Layout>
    </>
  )
}