export class Player{
    public name: string;
    public num: number;
    public age: number;
    public height: number;
    public weight: number;
    public position: string;
    public school: string;

    constructor(name: string, num: number, age: number, height: number, weight: number, position: string, school: string){
        this.name = name;
        this.num = num;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.position = position;
        this.school = school;
    }
}