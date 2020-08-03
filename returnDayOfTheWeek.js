function returnDay(){
    var now =    new Date();
    var dateToUse = now.getDay();

    switch(dateToUse){
        case 0 : return "Domingo";
        break;
        case 1 : return "Hoje é Segunda-Feira";
        break;
        case 2 : return "Hoje é Terça-Feira";
        break;
        case 3 : return "Hoje é Quarta-Feira";
        break;
        case 4 : return "Hoje é Quinta-Feira";
        break;
        case 5 : return "Hoje é Sexta-Feira";
        break;
        case 6 : return "Sábado";
        break;
    }
}

console.log(returnDay());