//GET user informstion.
import fire from '../../../lib/fire';
const firebaseDB = fire.database();

var userId = firebase.auth().currentUser.uid;

export default async (req, res) => {
    try {
        firebaseDB.ref('users/0' + userId).once('value', (snapshot) => {
            const questionsArr = [];
            snapshot.forEach((childSnapshot) => {
                questionsArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            questionsArr.reverse()
            res.status(200).json(questionsArr);
        })

    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message
        });
    }

};

//GET videos by Slug
//ACOMODAR A LA PROPIOA BASE DE DATOS. por ID de jugada?
export const getCollectionBySlug = async (slug, collection, res) => {
    try {
      const response = await api.get(`${BASE_URL}/${collection}?slug=${slug}`);
      const responseData = response.data;
      if (responseData.length) {
        const dataObject = responseData[0];
        return { ...dataObject };
      } else {
        res.setHeader('location', '/404');
        res.statusCode = 302;
        res.end();
        return {};
      }
    } catch (error) {
      res.setHeader('location', '/404');
      res.statusCode = 302;
      res.end();
      return {};
    }
  };