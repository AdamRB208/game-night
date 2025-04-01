import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"


class PlayersService {
  addPlayer(playerName, playerPicture) {
    const newPlayer = new Player(playerName, playerPicture, 0)
    AppState.Players.push(newPlayer)
  }
  scoreIncrease(playerName) {
    console.log('increase score service', playerName)
    const playerToIncrease = AppState.Players.find(player => player.name == playerName)
    playerToIncrease.score++
    console.log(playerToIncrease)
  }

  scoreDecrease(playerName) {
    console.log('decreased score service', playerName)
    const playerToDecrease = AppState.Players.find(player => player.name == playerName)
    playerToDecrease.score--
    if (playerToDecrease.score < 0) playerToDecrease.score = 0
    console.log(playerToDecrease)
  }
}

export const playersService = new PlayersService()