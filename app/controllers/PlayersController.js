import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";


export class PlayersController {
  constructor() {
    console.log('Players Controller', AppState.Players)
    this.drawPlayers()
  }

  drawPlayers() {
    const playerElem = document.getElementById('PlayerCards')
    let playerContent = ''
    const players = AppState.Players
    players.forEach((player) => playerContent += player.playerCard())
    playerElem.innerHTML = playerContent
  }

  scoreDecrease(playerName) {
    console.log('Decreasing Score --', playerName)
    playersService.scoreDecrease(playerName)
    this.drawPlayers()
  }

  scoreIncrease(playerName) {
    console.log('Increasing Score ++', playerName)
    playersService.scoreIncrease(playerName)
    this.drawPlayers()
  }

  addPlayer() {
    console.log('added player')
    event.preventDefault()
    const playerFormElem = event.target
    const playerName = playerFormElem.name.value
    const playerPicture = playerFormElem.picture.value
    playersService.addPlayer(playerName, playerPicture)
    this.drawPlayers()
  }
}