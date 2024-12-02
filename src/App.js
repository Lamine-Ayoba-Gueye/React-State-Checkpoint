import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: "Mame Faye",
        bio: "Développeur web.",
        imgSrc: "creditpersonnephy.jpeg",
        profession: "Développeur Full Stack",
      },
      montre: false,
      tempsEcoule: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        tempsEcoule: prevState.tempsEcoule + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleMontrer = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  render() {
    const { Personne, montre, tempsEcoule } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={this.toggleMontrer}>
          {montre ? "Cacher le Profil" : "Afficher le Profil"}
        </button>
        {montre && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={Personne.imgSrc}
              alt="Profil"
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h2>{Personne.fullName}</h2>
            <p>{Personne.bio}</p>
            <h4>{Personne.profession}</h4>
          </div>
        )}
        <div style={{ marginTop: "20px" }}>
          <p>Temps écoulé depuis le montage : {tempsEcoule} secondes</p>
        </div>
      </div>
    );
  }
}

export default App;
