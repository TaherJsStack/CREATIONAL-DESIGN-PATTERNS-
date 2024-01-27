import { IPrototype, IUserData } from "../interface"

export class ConcretePrototype implements IPrototype {
    
    constructor(
        private user: IUserData,
    ){}
    
    public clone(): IPrototype {
        const clone = Object.create(this)
        clone.user = { ...this.user }
        return clone
    }
    public getUserData(): IUserData {
        return this.user
    }

}
