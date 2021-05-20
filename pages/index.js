import {Layout} from '../containers'
import {Home as HomeContainer } from '../containers';

function Home() {
  return (
    <Layout>
      <HomeContainer/>
    </Layout>
  )
}


export default Home;

export async function getServerSideProps(ctx) {
  const data = await getUserData(ctx);
  return { props: data };
}

