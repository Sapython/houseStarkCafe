export const environment = {
  firebase: {
    projectId: 'house-stark-cafe',
    appId: '1:785594484821:web:88d44c51fcc26ac6492cdc',
    storageBucket: 'house-stark-cafe.appspot.com',
    locationId: 'us-central',
    apiKey: 'REPLACEMENT_STRING',
    authDomain: 'house-stark-cafe.firebaseapp.com',
    messagingSenderId: '785594484821',
    measurementId: 'G-ZK95F4CP8G',
  },
  cloudFunctions: {
    createOrder: 'https://us-central1-trivenisangam-aef13.cloudfunctions.net/createOrder',
    capturePayment:
      'https://us-central1-trivenisangam-aef13.cloudfunctions.net/capturePayments',
  },
  RAZORPAY_KEY_ID: 'REPLACEMENT_STRING_uaE9gdz5zjzhGm',
  production: true,
};
