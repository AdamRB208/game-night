import { HomeController } from './controllers/HomeController.js';
import { PlayersController } from './controllers/PlayersController.js';


class App {

  HomeController = new HomeController()

  PlayersController = new PlayersController()



}

window['app'] = new App()


