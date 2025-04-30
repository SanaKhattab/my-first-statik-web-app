import React, { Component } from "react";

class Meny extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: null, // ingen sektion öppen från början
    };
  }

  toggleSection = (section) => {
    this.setState((prevState) => ({
      openSection: prevState.openSection === section ? null : section,
    }));
  };

  render() {
    const { openSection } = this.state;

    return (
      <main>
        <section className="about">
          <h2>Meny</h2>

          <div className="menu-section">
            <p>
              <span
                className="clickable"
                onClick={() => this.toggleSection("pizza")}
              >
                🍕 Pizza
              </span>
              {openSection === "pizza" && (
                <>
                  <br />• Margarita .................... pris kr
                  <br />• Vesuvio (Skinka) ............ pris kr
                  <br />• Capricciosa ................. pris kr
                  <br />• Hawaii ....................... pris kr
                </>
              )}
            </p>

            <p>
              <span
                className="clickable"
                onClick={() => this.toggleSection("kebab")}
              >
                🥙 Kebab
              </span>
              {openSection === "kebab" && (
                <>
                  <br />• Pita Kebab ................... pris kr
                  <br />• Rullkebab .................... pris kr
                  <br />• Stark Kebabrulle ............ pris kr
                  <br />• Vitlöksrullkebab ............ pris kr
                </>
              )}
            </p>
          </div>

          <div className="menu-section">
            <p>
              <span
                className="clickable"
                onClick={() => this.toggleSection("sallad")}
              >
                🥗 Sallad
              </span>
              {openSection === "sallad" && (
                <>
                  <br />• Kebabsallad ................. pris kr
                  <br />• Amerikansk Sallad ........... pris kr
                  <br />• Kycklingsallad .............. pris kr
                  <br />• Gyrosallad ................... pris kr
                </>
              )}
            </p>

            <p>
              <span
                className="clickable"
                onClick={() => this.toggleSection("dryck")}
              >
                🧃 Dryck
              </span>
              {openSection === "dryck" && (
                <>
                  <br />• Dricka 33cl .................. pris kr
                  <br />• Dricka 50cl .................. pris kr
                  <br />• Dricka 2 liter ............... pris kr
                </>
              )}
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default Meny;
