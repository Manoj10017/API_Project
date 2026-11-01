class Car {

    readonly name: string;
    readonly model: string;
    readonly colour: string;

    constructor(cname: string, cmodel: string, ccolour: string) {
        this.name = cname;
        this.model = cmodel;
        this.colour = ccolour;

    }
    getName() {
        console.log(`The car name is : ${this.name}`)
    }

    getModel() {
        console.log(`The car name is : ${this.model}`)
    }

    getColour() {
        console.log(`The car name is : ${this.colour}`)
    }


}

class Honda extends Car {
    hondaName: string;
    hondaModel: string;
    hondaColour: string;

    constructor(hname: string, hmodel: string, hcolour: string, cname: string, cmodel: string, ccolour: string) {
        super(cname, cmodel, ccolour);
        this.hondaName = hname;
        this.hondaModel = hmodel;
        this.hondaColour = hcolour
    }
    getName() {
        console.log(`The car name is : ${this.hondaName}`)
    }

    getModel() {
        console.log(`The car name is : ${this.hondaModel}`)
    }

    getColour() {
        console.log(`The car name is : ${this.hondaColour}`)
    }

    getParent() {
        super.getColour();
    }

}

let honda = new Honda("SSuzuki", "ertiga", "white", "hatchback", "2022", "grey");
honda.getName();
honda.getModel();
honda.getColour();

