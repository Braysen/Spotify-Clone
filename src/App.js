import React, { useEffect, useState } from 'react';//Validado
import './App.css';//Validado
import Login from './Login';//Validado
import { getTokenFromUrl } from './spotify';//Validado
import SpotifyWebApi from 'spotify-web-api-js';//Validado
import Player from './Player';//Validado
import { useDataLayerValue } from './DataLayer';//Validado

const spotify = new SpotifyWebApi();//Validado

function App() {
  const [ {user , token} , dispatch ] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();//Obtenemos el token
    window.location.hash = "";//Validado
    const _token = hash.access_token;//Validado

    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });//Validado

      //Asignamos a la instancia el token
      spotify.setAccessToken(_token);//Validado

      spotify.getMe().then((user) => {

        dispatch({
          type: 'SET_USER',
          user: user,
        });//Validado

      });//Validado

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });//Validado
      });//Validado

    }//Validado

  },[]);

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;