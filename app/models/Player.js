


export class Player {
  constructor(name, picture, score) {
    this.name = name
    this.picture = picture
    this.score = score
  }

  playerCard() {
    return /* html */ `
    <div class="col-md-3">
          <div class="card shadow">
            <img src="${this.picture}" alt="Adams Image">
            <div class="card-body text-center">
              <h3 class="card-title fs-3">${this.name}</h3>
              <div class="fw-bold fs-5 text-${this.scoreColor}">${this.score}</div>
              <button onClick="app.PlayersController.scoreDecrease('${this.name}')" class="btn btn-danger mdi mdi-minus"></button> 
              <button onClick="app.PlayersController.scoreIncrease('${this.name}')" class="btn btn-success mdi mdi-plus"></button> 
            </div>
          </div>
        </div>
    `
  }

  get scoreColor() {
    if (this.score > 9) return 'success'

    if (this.score > 4) return 'warning'

    return 'primary'
  }
}



