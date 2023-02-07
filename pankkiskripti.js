var rahaMaara;
var IBAN;
var tarkkailu = new RegExp(/[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{2} ?[\d]{0,2}/gm)
// let date = new Date();
// console.log(date)

function kysyTili() {
  IBAN = prompt("Kirjoita tilinumerosi, example tilinumero on: FI23 8723 2987 8732 23")
}

class pankki {
    constructor(tilinumero, saldo = 0, historia = []) {
      this.tilinumero = tilinumero;
      this.saldo = saldo;
      this.historia = historia;
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
      "Tilisi tiedot ovat:<br>" + "Tilinumero: " + IBAN + "<br>Saldo: " + this.saldo + " €";
    }
    naytaHistoria() {
        document.getElementById("historia").innerHTML =
        "Tilisi historia: <br>" + this.historia.join("<br>");
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
        this.historia.push(date + " Nosto " + rahaMaara + "€" + " Saldo ennen tapahtumaa: " + this.saldo + "€" + "<br>");
      }else {
        alert("Tililläsi ei ole tarpeeksi katetta.")
      }
    }
    tarkistaIBAN() {
      if (IBAN.match(tarkkailu)) {
        console.log("We are in..")
      } else {
        alert("Viallinen tilinumero!")
        location.reload()
      }
    }
}

let tili2 = new uusiPankki(IBAN);
console.log("Muokkaus :)")


//Lisää uuteen luokkaan metodi, joka tarkistaa, onko tilillä tarpeeksi rahaa tietyn summan nostamiseen. DONE
//Voit esimerkiksi palauttaa arvon true tai false riippuen siitä, onko tilillä tarpeeksi rahaa. DONE
//Tilinumero, jolta rahaa ollaan nostamassa kysytään käyttäjältä. DONE

//Lisää uuteen luokkaan myös metodi, joka tarkistaa tilinumeron validiuden (esim. tilinumeron pituuden tai tietyt numerosarjat). DONE