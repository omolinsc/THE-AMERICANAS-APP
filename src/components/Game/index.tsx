import React from 'react'

const Game = () => {

    const game = {
        players : ["1", "2", "3", "4"],
        // players : ["1", "2", "3", "4", "5", "6", "7", "8"],
        type : "singles",
    }

    const generateMatches = (players: any) => {
        const pairs: any = []
        let pos: number = 0;
        for (let i = 0; i < players.length; i++) {
            for (let j = i+1; j < players.length; j++) {
                pairs[pos++] = [players[i], players[j]];
            }
        }
        const matches: any = [];
        for (let i = 0; i < pairs.length; i++) {
            for (let j = i+1; j < pairs.length; j++) {
                matches.push([pairs[i], pairs[j]]);
            }
        }
        console.log(matches);

    }

    generateMatches(game.players)

  return (
    <div>
      {game && 
        <div>
            {game.players.map((player, index) => {
                return <p key={index+player}>player {player}</p>
            })}
            <p>Tipo de partida : {game.type}</p>
        </div>
      }
    </div>
  )
}

export default Game
