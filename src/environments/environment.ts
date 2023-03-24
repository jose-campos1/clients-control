import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'client-control-project',
    appId: '1:309957568123:web:7f20109bfed2724308a4de',
    storageBucket: 'client-control-project.appspot.com',
    apiKey: 'AIzaSyDUQ19xEsUQDNCv2KKXZK-PfdBULBUoMBg',
    authDomain: 'client-control-project.firebaseapp.com',
    messagingSenderId: '309957568123',
    measurementId: 'G-K8FH6D0XPL',
  },
    apiKey: "AIzaSyDUQ19xEsUQDNCv2KKXZK-PfdBULBUoMBg",
    authDomain: "client-control-project.firebaseapp.com",
    projectId: "client-control-project",
    storageBucket: "client-control-project.appspot.com",
    messagingSenderId: "309957568123",
    appId: "1:309957568123:web:7f20109bfed2724308a4de",
    measurementId: "G-K8FH6D0XPL"
};

const firebaseConfig = {
    apiKey: "AIzaSyDUQ19xEsUQDNCv2KKXZK-PfdBULBUoMBg",
    authDomain: "client-control-project.firebaseapp.com",
    projectId: "client-control-project",
    storageBucket: "client-control-project.appspot.com",
    messagingSenderId: "309957568123",
    appId: "1:309957568123:web:7f20109bfed2724308a4de",
    measurementId: "G-K8FH6D0XPL"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);