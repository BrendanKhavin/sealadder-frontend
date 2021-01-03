import { publishFacade } from "@angular/compiler";

export class Movie{ 
    constructor(public id: number, public original_name: string, public desc: string, public imageURL: string, public en_name : string, public date : string){}
}