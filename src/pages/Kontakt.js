import React from "react";

class Kontakt extends React.Component {
  render() {
    return (
      <main>
        <section className="about">
          <h1>Kontakta oss</h1>
          <p>
            Vi tar gärna emot synpunkter på vår mat och service! Vi värdesätter
            din feedback och använder den för att förbättra vår meny. Har du
            något beröm? Det uppskattar vi också!
          </p>
          <p>
            <strong>Telefon:</strong> 090-14 25 06
            <br />
            <strong>E-post:</strong> svalan@svalanpizzeria.se
            <br />
            <strong>Adress:</strong> Ringvägen 35, 904 21 Umeå
          </p>

          <form action="/action_page.php" className="kontakt-form">
            <input type="text" name="name" required placeholder="Namn" />
            <input
              type="email"
              name="email"
              required
              placeholder="E-postadress"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Ditt meddelande"
            ></textarea>
            <input type="submit" value="Skicka" />
          </form>
        </section>
      </main>
    );
  }
}

export default Kontakt;
