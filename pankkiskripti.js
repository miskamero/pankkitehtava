var rahaMaara;
// let date = new Date();
// console.log(date)



class pankki {
    constructor(tilinumero = "", saldo = 0, historia = []) {
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
        let date = new Date();
        if (rahaMaara <= this.saldo) {
          this.saldo -= rahaMaara;
          this.historia.push(date + " Nosto " + rahaMaara + "€" + " Saldo ennen tapahtumaa: " + this.saldo + "€" + "<br>");
        }else {
          alert("Tililläsi ei ole tarpeeksi katetta.")
        }
        
    }
    naytaTiedot() {
      document.getElementById("tietoja").innerHTML =
      "Tilisi tiedot ovat:<br>" + "Tilinumero: " + this.tilinumero + "<br>Saldo: " + this.saldo + " €";
    }
    naytaHistoria() {
        document.getElementById("historia").innerHTML =
        "Tilisi historia: <br>" + this.historia.join("<br>");
    }
}
let tili1 = new pankki("FI286917472098");
console.log("Muokkaus :)")