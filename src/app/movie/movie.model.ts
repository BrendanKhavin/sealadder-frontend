import { publishFacade } from "@angular/compiler";

export class Movie{ 
    constructor(public id: string, public original_name: string, public desc: string, public imageURL: string, public en_name : string, public date : string){}
    /*
    id: String (Unique ID to identify a film)
    original_name : String (Name of film in its original language (used for displaying the movie with the english title if necessary))
    desc : String (Film description)
    imageURL : String (URL that leads to the film poster)
    en_name : String (English Name of film)
    date : String (Date of release (Stored as string to apply substr))
    */
}