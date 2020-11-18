export class Product {
constructor(public _id: number,
public name: string,
public description: string,
public price: number,
public imageUrl: string){}

}
// constructor( _id:number, name, description = '', price = 0, imageUrl = 'https://static.wixstatic.com/media/84428b_aec5877604ff494295b3af5af0b27a67~mv2.png'){
//     this._id = _id;
//     this.name = name;
//     this.description = description
//     this.price = price;
//     this.imageUrl = imageUrl
//  }
// }