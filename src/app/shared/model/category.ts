import { Language } from "./language";

export class Category {

    name: string;
    id: number ;
    lastUpdate: Date ;
    origin: Language ;
    target: Language ;
    words: Map<string,string>;

    constructor(name: string ,  id: number , origin: Language, target: Language) {
        this.name = name;  
        this.id = id;
        this.lastUpdate = new Date();
        this.origin = origin;
        this.target = target;
        this.words = new Map();
    }

}

