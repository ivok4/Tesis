import React from "react";
import {LayoutEdicion, Edicion as EdicionContainer} from '../../containers'
import { getCollectionBySlug } from '../api/plays/get';

export default function Editions() {
  return (
    <LayoutEdicion>
         {/* <EdicionContainer data={data}/>  */}
         <p>holas</p>
    </LayoutEdicion>
  )
}

export async function getServerSideProps({ res, params }) {
    const { slug } = params;
    //const data = slug;
    const data = await getCollectionBySlug(slug, res);
    return { props: {data} }
}

