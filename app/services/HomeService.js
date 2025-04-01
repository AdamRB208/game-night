import { AppState } from "../AppState.js"

class HomeService {

  addClickCount() {
    console.log('Service clicked button')
    AppState.clickCount++
    console.log(AppState.clickCount)
  }

}

export const homeService = new HomeService()