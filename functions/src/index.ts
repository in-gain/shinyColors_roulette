import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const firebaseConfig = {
  apiKey: 'AIzaSyDVlGdQ9j8ojQJQS_OpoEFpPPvhxqYzdXk',
  authDomain: 'shinycolors-roulette.firebaseapp.com',
  databaseURL: 'https://shinycolors-roulette-default-rtdb.firebaseio.com',
  projectId: 'shinycolors-roulette',
  storageBucket: 'shinycolors-roulette.appspot.com',
  messagingSenderId: '1070682729174',
  appId: '1:1070682729174:web:f0ae4f84627fb0a728b777',
  measurementId: 'G-HWZHZ8YWFN'
}
admin.initializeApp(firebaseConfig)

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const queryRoulette = functions
  .region('asia-northeast1')
  .https.onRequest((req, res) => {
    const ref = admin.database().ref('/シャニマス/ルーレット/')
    functions.logger.info(req)
    console.info(req)
    console.info(ref)
    res.send(ref.orderByValue()
      .equalTo(false)
      .get()
      .then(snapshot => snapshot.toJSON())
    )
  })
