import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAR7As7NLxiWFYDIYIk2IlQZMxHRz_dNGE",
  authDomain: "topicos-e6990.firebaseapp.com",
  databaseURL: "https://topicos-e6990.firebaseio.com",
  projectId: "topicos-e6990",
  storageBucket: "topicos-e6990.appspot.com",
  messagingSenderId: "312445693200",
  appId: "1:312445693200:web:d75d6077f511066ed3c995",
  measurementId: "G-71RL144RXJ"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  Pessoa: {
    nome: "Eneas",
    idade: 80,
    sexo: "M",
    endereco: {
      cidade: "Erechim",
      bairro: "Centro",
      rua: "Alemanha"
    }
  }
});
