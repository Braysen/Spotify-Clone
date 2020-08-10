import React, { useEffect } from 'react';//Validado
import SpotifyWebApi from 'spotify-web-api-js';//Validado
import { useDataLayerValue } from './DataLayer';//Validado
import Player from './Player';//Validado
import { getTokenFromUrl } from './spotify';//Validado
import './App.css';//Validado
import Login from './Login';//Validado




const spotify = new SpotifyWebApi();//Validado

function App() {
  const [ { token } , dispatch ] = useDataLayerValue();//user

  //run code based on a given condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();//Obtenemos el token
    window.location.hash = "";//Validado
    const _token = hash.access_token;//Validado

    if(_token){
      spotify.setAccessToken(_token);//Nuevo
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });//Validado

      spotify.getPlaylist('37i9dQZF1DWVskFRGurTfg').then((response) => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );//Validado

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });//Nuevo

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

  },[token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;