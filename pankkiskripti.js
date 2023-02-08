var rahaMaara;
var IBAN;
var tarkkailu = new RegExp(/[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{2} ?[\d]{0,2}/gm);
var nettoTulot;
var luotto;
// let date = new Date();
// console.log(date)

function kysyTili() {
  IBAN = prompt("Kirjoita tilinumerosi, example tilinumero on: FI23 8723 2987 8732 23");
}

class pankki {
    constructor(tilinumero, saldo = 0, historia = [], korko = 0.02) {
      this.tilinumero = tilinumero;
      this.saldo = saldo;
      this.historia = historia;
      this.korko = korko;
    }
    talleta() {
        rahaMaara = parseInt(prompt("Kuinka paljon talletetaan rahaa?"));
        let date = new Date();
        this.historia.push(date + " Talletus " + rahaMaara + "€" + " Saldo ennen tapahtumaa: " + this.saldo + "€" + "<br>");
        this.saldo += rahaMaara
    }
    nosta() {
        rahaMaara = parseInt(prompt("Kuinka paljon nostetaan rahaa?"))
        // let date = new Date();
        // if (rahaMaara <= this.saldo) {
        //   this.saldo -= rahaMaara;
        //   this.historia.push(date + " Nosto " + rahaMaara + "€" + " Saldo ennen tapahtumaa: " + this.saldo + "€" + "<br>");
        // }else {
        //   alert("Tililläsi ei ole tarpeeksi katetta.")
        // } 
    }
    naytaTiedot() {
      document.getElementById("tietoja").innerHTML =
      "Tilisi tiedot ovat:<br>" + "Tilinumero: " + IBAN + "<br>Saldo: " + this.saldo.toFixed(2) + " €" +
      "<br>Mahdollinen luottosi: " + luotto + " €";
    }
    naytaHistoria() {
        document.getElementById("historia").innerHTML =
        "Tilisi historia: <br>" + this.historia.join("<br>");
    }
    korkoFunktio() {
      this.saldo += this.saldo * this.korko
    }
}
class uusiPankki extends pankki {
    constructor(tilinumero, saldo, historia) {
        super(tilinumero, saldo, historia);
    }
    tarkistaPituus() {
      console.log(this.tilinumero)
    }
    tarkistaRaha() {
      let date = new Date();
      if (rahaMaara <= this.saldo) {
        this.saldo -= rahaMaara;
        this.historia.push(date + " Nosto " + rahaMaara + "€" + " Saldo tapahtuman jälkeen: " + this.saldo + "€" + "<br>");
      }else {
        alert("Tililläsi ei ole tarpeeksi katetta.")
      }
    }
    tarkistaIBAN() {
      if (IBAN.match(tarkkailu)) {
        console.log("We are in..");
        nettoTulot = parseInt(prompt("Kerro nettotulosi (€/kk)"));
        luotto = nettoTulot * 0.25;
      } else {
        alert("Viallinen tilinumero!")
        location.reload()
      }
    }
}

let tili2 = new uusiPankki(IBAN);
console.log("Muokkaus :)")


//Lisää korko: Lisää tilille korkoa kasvattava metodi. DONE

//Lisää luotonsaantimahdollisuus: 
//Lisää luottorajan tarkistava metodi, jolla pelaaja voi saada luottoa. 
//Luottorajaan vaikuttaa käyttäjän nettotulot, joka kysytään käyttäjältä. Maksimi luottoraja on 25% kk nettotuloista.  