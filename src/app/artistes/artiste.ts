export class Artiste {
  private _id: number = 0;
  name: string;
  photo: string;

  constructor(name: string, photo: string) {
    this.name = name;
    this.photo = photo;
  }


  set id(value: number) {
    this._id = value;
  }
  get id(): number {
    return this._id;
  }
}
