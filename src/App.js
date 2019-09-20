import React, { Component } from 'react';
import CitatListe from './components/CitatListe'; //Når der er export på så vi kan import den. 
import OpretCitat from './components/OpretCitat';


class App extends Component { //class App skal være med stort bogstav. 
  state = { //Her viser, hvad data skal består af og man putte kun de vigtige tinge i state.
            //{titel: "Intet ved" er en key}. {} betyder at det er en array.
    citater: [
      { titel: "Intet ved", citattxt: "Alt, hvad jeg ved, er, at jeg intet ved.", forfatter: "Sokrates", id: 1 },
      { titel: "Det klarer jeg", citattxt: "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.", forfatter: "Pippi Langstrømpe", id: 2 },
      { titel: "Løsninger", citattxt: "Find ikke fejl, find en løsning.", forfatter: "Henry Ford", id: 3 },
      { titel: "Sig selv", citattxt: "Vær dig selv, alle andre er alligevel optaget.", forfatter: "Oscar Wilde", id: 4 },
      { titel: "Syng!", citattxt: "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge.", forfatter: "Samuel Beckett", id: 5 }
    ]
  }

  //SletCitat - modtager id så vi kan slette det rigtige citat
  sletCitat = (id) =>{

    //alert ("Slet citat med id" + id);

    //Filtrer uønsket citat fra listen af citater og gem den nye liste i en variabel (citaterfiltreret)
    let citaterfiltreret = this.state.citater.filter(c => {
      return c.id !== id; 

      //filter fra hvor citat-id = id (som sendes med ind i metoden) . 
     //Andet forklaring: returner c/citatet, HVIS dets id er forskellig fra id-som-sendes-med-fra-button
     //.filter () er ligesom .map() men filter() returner alle citatet som har forskellig id-som-sendes-med-fra-button 

    }); 

    //Overskriv state med den nye filtrerede liste med citater
    this.setState({
      citater: citaterfiltreret
    });

  }

  OpretCitat = (nytcitat) => {

    nytcitat.id = Math.random(); //giv citatet en id
    let allecitater = [...this.state.citater, nytcitat];
     //alle citater fra state en for en (...) + det nye citat

    //Gem alt det nye i state
    this.setState({
      citater:allecitater
    });

  }

  render() {
    return (
      <div>

        <h1 className="overskrift">Citater</h1>
        <OpretCitat opretCitatProp={this.OpretCitat} /> 
        <CitatListe allecitaterProp={this.state.citater} sletCitatProp={this.sletCitat} /> 
      </div>
    )
  }
}

export default App


//Noter
// <CitatListe allecitaterProp={this.state.citater} /> 
// <CitatLise/> er components. 
//allecitaterProp som en pose pakke og {this.state.citater} er det som ligger i pakken.

//filter fra hvor citat-id = id (som sendes med ind i metoden) . 
//Andet forklaring: returner c/citatet, HVIS dets id er forskellig fra id-som-sendes-med-fra-button
//.filter () er ligesom .map() men filter() returner alle citatet som har forskellig id-som-sendes-med-fra-button 

//<OpretCitat opretCitatProp={this.OpretCitat} />  her vi åbner {this.OpretCitat}, fordi den ligger i Props