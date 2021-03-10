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

export interface BeitragInterface{
    title: string,
    author: string,
    content: string,
    views: number
}