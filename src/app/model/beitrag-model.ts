export class BeitragModel {
    title: string;
    author: string;
    content: string;
    views: number;

    constructor(
        title: string, 
        author: string,
        content: string,
        ) {
            this.title = title;
            this.content = content;
            this.author = author;
            this.views = 0;
    }
}

export interface IBeitragCreation{
    title: string,
    author: string,
    content: string,
    views: number
}

export interface IBeitragResponse{
    id: number, 
    title: string,
    author: string,
    content: string,
    views: number  
}