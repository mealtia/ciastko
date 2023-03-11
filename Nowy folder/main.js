//1 zadanie
function oceny(ocena) {
    switch (ocena) {
        case "1":
            console.log("niedostateczny");
            return "niedostateczny";
            break;
        case "2":
            console.log("dopuszczjacy");
            return "dopuszczajacy";
            break;
        case "3":
            console.log("dostateczny");
            return "dostateczny";
            break;
        case "4":
            console.log("dobry");
            return "dobry";
            break;

        default:
            console.log("za duza liczba")
            break;
    }
}

oceny("1");
oceny("2");
oceny("3");
oceny("4");
oceny("9");

//2 zadanie
function potegowanie(c) {
    return c ** 10;
}
console.log(potegowanie(2));

//3 zadanie
function parzysta(cyfra) {
    if (cyfra % 2 == 0) {
        console.log("liczba jest parzysta");
    } else {
        console.log("liczba jest nieparzysta");
    }
}

parzysta(6);
parzysta(9);
parzysta(80);

function bezpieczne(haslo) {
    if (haslo.length > 12 && haslo.length < 16) {
        if (haslo.match(/[a-zA-Z0-9#$@]/)) {
            console.log("twoje haslo jest bezpieczne");
        }
        else {
            console.log("twoje haslo nie jest bezpieczne");
        }
    }
    else {
        console.log("Zła długosc hasla");
    }

}

bezpieczne("bdi#12anvdDsd");
