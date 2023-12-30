class Tree {

    species;

    constructor(species) {
        this.species = species;
    };

    static definition() {
        return (`A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`);
    };
}


class Deciduous extends Tree {

    name;

    constructor(species, name) {
        super(species);
        this.name = name;
    };

    static definition() {
        return (`${Tree.definition()} Deciduous trees shed their leaves annually.`); //accessed through the parent class which also works
    };

}

class Evergreen extends Tree {

    constructor(species, name) {
        super(species, name);
        this.name = name;
    }

    static definition() {
        return (`${super.definition()} Evergreens keep their leaves all year round.`)
    }
}