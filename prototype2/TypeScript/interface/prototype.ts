import { IUserData } from "./user-data";

export interface IPrototype{
    clone(): IPrototype;
    getUserData(): IUserData;
}
