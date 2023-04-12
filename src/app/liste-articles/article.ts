export class Article {
  private _id: number = 0;
  constructor(
    private _nom: string,
    private _prix: number,
    private _description: string | null
  ) { }

  set id(value: number) {
    this._id = value;
  }
  get id(): number {
    return this._id;
  }
  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  get description(): string | null {
    return this._description;
  }

  set description(value: string | null) {
    this._description = value;
  }
}
