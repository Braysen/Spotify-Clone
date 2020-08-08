import React, { useEffect, useState } from 'react';//Validado
import './App.css';//Validado
import Login from './Login';//Validado
import { getTokenFromUrl } from './spotify';//Validado
import SpotifyWebApi from 'spotify-web-api-js';//Validado
import Player from './Player';//Validado
import { useDataLayerValue } from './DataLayer';//Validado

const spotify = new SpotifyWebApi();//Validado

function App() {
  const [ token , setToken ] = useState(null);//Validad
  const [ {} , dispatch ] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();//Obtenemos el token
    window.location.hash = "";//Validado
    const _token = hash.access_token;//Validado

    if(_token){
      setToken(_token);//Validado

      //Asignamos a la instancia el token
      spotify.setAccessToken(_token);//Validado

      spotify.getMe().then((user) => {
        console.log("el usuario es: ", user);
      });//Validado
    }//Validado

    console.log("I have a token>>>", token);//Validado
  },[]);

  return (
    <div className="App">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;