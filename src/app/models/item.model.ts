class Item {
  private _title: string;
  private _description: string;
  private _imageUrl: string;
  private _price: string;

  constructor(title: string, description: string, imageUrl: string, price: string) {
    this._title = title;
    this._description = description;
    this._imageUrl = imageUrl;
    this._price = price;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }
}
