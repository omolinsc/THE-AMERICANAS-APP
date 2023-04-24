import React from 'react'
import Game from '../../components/Game';

const Games = () => {

  const games = localStorage.getItem("games");

  return (
    <React.Fragment>
      { !games && <Game /> }
    </React.Fragment>
  )
}

export default Games
