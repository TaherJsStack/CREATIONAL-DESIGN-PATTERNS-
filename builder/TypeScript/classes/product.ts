 
export class Product {
    private parts: string[] = [];
    public add(part: string): void{
        this.parts.push(part);
    }
    public listParts():void {
        console.log(`Product Parts: ${this.parts.join(',')}`)
    }
}