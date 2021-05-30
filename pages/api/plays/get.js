//GET user informstion.
import fire from '../../../lib/fire';
const firebaseDB = fire.database();
//var userId = fire.auth().currentUser.uid;

//console.log(userId);

export default async (req, res) => {
    try {
        firebaseDB.ref('users/0' + userId).once('value', (snapshot) => {
            const questionsArr = [];
            console.log(userId);
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
//personalizada

export const getCollectionBySlug = async () => {
  try {
    firebaseDB.ref(`users/0/x3mvAyACoIPwW1f5FFoeUGQWtuB2/plays/${slug}`).once('value', (snapshot) => {
        const infoArr = [];
        snapshot.forEach((childSnapshot) => {
          infoArr.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        infoArr.reverse()
        res.status(200).json(infoArr);
        return infoArr;
    })
} 
   catch (error) {
      console.error("este es mi error", error);
  }
};

//FIN PERSONALIZADA


//prueba 

export const dataBySlugIvo = async (slug, res) => {
    const dbRef = firebase.database().ref();
dbRef.child("users").child(userId).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
};
//fin prueba




//PRUEBA 2
// export const getCollectionBySlug = async (slug, res) => {
//   try {
//     const response = await firebase.database().ref(`users/0/x3mvAyACoIPwW1f5FFoeUGQWtuB2/plays/${slug}`);
//     const responseData = await response.json();
//     //window.location.href = '/';
//     if (response.ok) {
//       console.log("response ok");
//       callback();
//     } else {
//       console.log("response NOT ok");
//       throw new Error(responseData.message);
//     }
//   } catch (err) {
//     console.log(err);
//     if (err.response) {
//       console.log(err.response.data);
//     }
//   }
//   };

//FIN PRUEBA 2



//ORIGINAL
// export const getCollectionBySlug = async (slug, collection, res) => {
//     try {
//       const response = await api.get(`${BASE_URL}/${collection}?slug=${slug}`);
//       const responseData = response.data;
//       if (responseData.length) {
//         const dataObject = responseData[0];
//         return { ...dataObject };
//       } else {
//         res.setHeader('location', '/404');
//         res.statusCode = 302;
//         res.end();
//         return {};
//       }
//     } catch (error) {
//       res.setHeader('location', '/404');
//       res.statusCode = 302;
//       res.end();
//       return {};
//     }
//   };

//GET para collections mio
export const getDataCollection = async (slug, res, params) => {
  const fetchData = async () => {
    try {
        const { data } = await firebase.database().ref(`/users/0/${userId}/plays/${slug}`).once('value').then((snapshot) => {
          var username = (snapshot.val())|| 'Anonymous';
        }); 
        
    } catch (error) {
        console.error("este es mi error", error);
    }
};
fetchData();
};




  //GET para collections original
// export const getDataCollection = async (collection, res, params) => {
//   try {
//     const { data } = await api.get(
//       `${BASE_URL}/${collection}`,
//       params ? { params } : {},
//     );
//     return data;
//   } catch (error) {
//     res.setHeader('location', '/404');
//     res.statusCode = 302;
//     res.end();
//     return {};
//   }
// };