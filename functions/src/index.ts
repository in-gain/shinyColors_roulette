const functions = require('firebase-functions')
const admin = require('firebase-admin')

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
  .https.onRequest((_req, res) => {
    const ref = admin.database().ref('/シャニマス/ルーレット')
    ref.on('value', (snapshot) => {
      const snapJSON:any = snapshot.toJSON() ?? {}
      const retObj:any = Object.keys(snapJSON).filter((objKey:string): boolean => snapJSON[objKey] === false)
      res.send(retObj)
    }, (errorObject) => {
      functions.logger.error(`the read failed: ${errorObject.message}`)
    })
  })
