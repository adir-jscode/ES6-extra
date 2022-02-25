class Team {
    name;
    degination = 'React Developer';
    address = "Bd";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    startSession() {
        console.log(this.name, "Start a web development session");
    }
}

const aamir = new Team('Aamir Khan', "Bd");
const salman = new Team('Salman Khan', 'Dubai');
console.log(aamir, salman);
aamir.startSession();
salman.startSession();