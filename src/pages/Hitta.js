import React from "react";

class Hitta extends React.Component {
  render() {
    return (
      <main>
        <section className="about">
          <h2>Hitta till oss</h2>
          <p className="contact-info">
            🍕 Storgatan 12
            <br />
            📍 123 45 Pizzastad
            <br />
            ⏰ Öppettider: 11:00 - 22:00
            <br />
            ☎️ Telefon: 0123-456 789
          </p>

          <iframe
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "400px", border: 0 }}
            title="Google Maps"
          ></iframe>
        </section>
      </main>
    );
  }
}

export default Hitta;
