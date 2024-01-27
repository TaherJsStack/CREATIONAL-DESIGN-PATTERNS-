interface IShapeProperties{
  color: string;
  x: number;
  y: number;
}


abstract class Shape {

  constructor( public shapeProperties: IShapeProperties ){}

  abstract clone(): Shape;


}

class Rectangle extends Shape {

  constructor( 
    public shapeProperties: IShapeProperties,
    public width: number,
    public height: number,
  ){
    super( shapeProperties );
  }

  public clone(): Shape {
      let clonedProperties: IShapeProperties = {
        color:  this.shapeProperties.color,
        x:      this.shapeProperties.x,
        y:      this.shapeProperties.y
      }
      return new Rectangle(clonedProperties, this.shapeProperties.x, this.shapeProperties.y)
    }
}

class Circle extends Shape {

  constructor( 
    public shapeProperties: IShapeProperties,
    public reduce: number,
  ){
    super( shapeProperties );
  }

  public clone(): Shape {
    let clonedProperties: IShapeProperties = {
      color: this.shapeProperties.color,
      x: this.shapeProperties.x,
      y: this.shapeProperties.y
    }
    return new Circle(clonedProperties, this.reduce)
  }

}

let redShape: Shape = new Rectangle({color: 'red', x: 50, y: 50}, 150, 200 )

// redShape.shapeProperties.color = 'blue';

let anotherRectangle: Shape = redShape.clone()

anotherRectangle.shapeProperties.color = 'green';

// console.log('redShape --->', redShape)
// console.log('anotherRectangle -->', anotherRectangle)




/**
 *  js shallow clone vs deep clone
 */

let obj = {
  p1: 'p1 dd',
  p2: 2024,
  innerObg: {
    prop1: 'green',
    prop2: 2024,
  }
}

// let deepClonedBbj = {...obj}
// let deepClonedBbj = Object.create(obj)
// let deepClonedBbj = Object.assign({...obj})
// let deepClonedBbj = Object.create({...obj})
let deepClonedBbj = JSON.parse(JSON.stringify(obj))
deepClonedBbj.p1 = '5555555'
deepClonedBbj.p2 = 5555555
deepClonedBbj.innerObg.prop2 = 5555555

console.log('obj -->',       obj);
console.log('deepClonedBbj -->', deepClonedBbj);
