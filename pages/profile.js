import {Layout} from '../containers';
import {Grilla} from '../components';

 function Profile() {
  return (
    <Layout>
        <Grilla/>
    </Layout>
  )
}

export default Profile;



export async function getServerSideProps(ctx) {
  const data = await getUserData(ctx);
  return { props: data };
}
