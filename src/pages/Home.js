import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <main>
        {/* Home Sektion */}
        <section id="home">
          <h1>Välkommen till Svalans Pizzeria</h1>
          <p>
            Luncherbjudande:
            <br />
            Vardagar 10.00–13.30 – Välj fritt från vår meny. Sallad och dryck
            ingår!
            <br />
            <strong>Från 95:-</strong>
          </p>

          <p>
            <strong>Öppettider:</strong>
            <br />
            Mån–Fre: 10:00–20:00
            <br />
            Lör–Sön: 11:00–20:00
          </p>

          <div className="boka">
            <Link to="/meny">Boka nu</Link>
          </div>
        </section>

        {/* Meny Sektion */}
        <section id="meny">
          <h2>Vår Meny</h2>
          <p>
            Vi erbjuder ett brett urval av rätter för alla smaker. Från våra
            klassiska pizzor till specialerbjudanden och vegetariska alternativ.
            Besök vår meny för att hitta din favorit!
          </p>
          <Link to="/meny">Se hela menyn</Link>
        </section>

        {/* Hitta oss Sektion */}
        <section id="hitta">
          <h2>Hitta oss</h2>
          <p>
            Vi ligger på Ringvägen 35 i Umeå, precis vid centrum. Vi ser fram
            emot ditt besök!
            <br />
            Här är vår adress:
          </p>
          <p>
            <strong>Adress:</strong>
            <br />
            Ringvägen 35, 90421 Umeå
          </p>
          <p>Du kan även hitta oss via Google Maps.</p>
          <Link to="/hitta">Hitta vägen hit</Link>
        </section>

        {/* Kontakta oss Sektion */}
        <section id="kontakta">
          <h2>Kontakta oss</h2>
          <p>
            Vi tar gärna emot kunders synpunkter angående vårt utbud av mat. Vi
            värderar feedback enormt mycket och det är ett viktigt verktyg för
            oss när vi vidareutvecklar vår meny.
          </p>

          <p>
            För att komma i kontakt med oss, vänligen använd formuläret på vår
            kontaktsida eller skicka oss ett meddelande direkt via:
          </p>
          <p>
            <strong>Telefon:</strong> 090-14 25 06
            <br />
            <strong>Email:</strong> svalan@svalanpizzeria.se
            <br />
            <strong>Adress:</strong> Ringvägen 35, 90421 Umeå
          </p>
          <Link to="/kontakt">Kontakta oss</Link>
        </section>
      </main>
    );
  }
}

export default Home;
