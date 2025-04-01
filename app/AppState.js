import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from './models/Player.js'
class ObservableAppState extends EventEmitter {


  clickCount = 0

  Players = [
    new Player('Adam', 'https://em-content.zobj.net/source/apple/419/person-climbing_1f9d7.png', 0),
    new Player('Bree', 'https://em-content.zobj.net/source/apple/419/woman-health-worker_1f469-200d-2695-fe0f.png', 0),
    new Player('Mason', 'https://em-content.zobj.net/source/apple/419/ninja_1f977.png', 0),
    new Player('Malcolm', 'https://em-content.zobj.net/source/apple/419/baby_1f476.png', 0)
  ]












}

export const AppState = createObservableProxy(new ObservableAppState())