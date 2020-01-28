class WireGrid {
  private _x: number[] = [];
  private _y: number[] = [];
  private wire: String[];
  constructor(wire: String[]) {
    this.wire = wire.slice();
    this.setWirePath();
  }

  setPathInCell(cell: String) {
    const direction: string = cell[0];
    const steps: number = parseInt(cell.substring(1));
    let xLastStep: number = this._x[this._x.length - 1];
    let yLastStep: number = this._y[this._y.length - 1];

    if (direction == 'R') {
      if (this._x.length !== 0) {
        for (let i = 1; i <= steps; i++) {
          this._x.push(xLastStep + i);
          this._y.push(yLastStep);
        }
      } else {
        for (let i = 0; i <= steps; i++) {
          this._x.push(i);
          this._y.push(0);
        }
      }
    } else if (direction == 'L') {
      if (this._x.length !== 0) {
        for (let i = 1; i <= steps; i++) {
          this._x.push(xLastStep - i);
          this._y.push(yLastStep);
        }
      } else {
        for (let i = 0; i <= steps; i++) {
          this._x.push(i * -1);
          this._y.push(0);
        }
      }
    } else if (direction == 'U') {
      if (this._y.length !== 0) {
        for (let i = 1; i <= steps; i++) {
          this._y.push(yLastStep + i);
          this._x.push(xLastStep);
        }
      } else {
        for (let i = 0; i <= steps; i++) {
          this._y.push(i);
          this._x.push(0);
        }
      }
    } else {
      if (this._y.length !== 0) {
        for (let i = 1; i <= steps; i++) {
          this._y.push(yLastStep - i);
          this._x.push(xLastStep);
        }
      } else {
        for (let i = 0; i <= steps; i++) {
          this._y.push(i * -1);
          this._x.push(0);
        }
      }
    }
  }

  setWirePath() {
    for (let i = 0; i < this.wire.length; i++) {
      this.setPathInCell(this.wire[i]);
    }
  }

  get x(): number[] {
    return this._x;
  }

  get y(): number[] {
    return this._y;
  }
}

export { WireGrid };
