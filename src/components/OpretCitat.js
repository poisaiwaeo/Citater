//rce
import React, { Component } from 'react'

export class OpretCitat extends Component {
    state = {
        titel:null, 
        citattxt: null,
        forfatter:null
    }
    //TITEL: Håndter titel-input så det bliver puttet i state
    handleTitel = (e) => {
       console.log(e.target.value)
       
       //Her ændrer man på state
       this.setState({
           titel:e.target.value
       });
    }

      //CITATET: Håndter titel-input så det bliver puttet i state
      handleCitatet = (e) => {
        console.log(e.target.value)
        
        //Her ændrer man på state
        this.setState({
            citattxt:e.target.value
        });
     }

       //FORFATTER: Håndter titel-input så det bliver puttet i state
    handleForfatter = (e) => {
        console.log(e.target.value)
        
        //Her ændrer man på state
        this.setState({
            forfatter:e.target.value
        });
     }

     //Her gemmer den citater
     handleGemCitat = (e) => {
         //Snup state (nyt citat) og "send det" til opret-metoden i App.
         e.preventDefault(); //e.preventDefault(); represe siden/ den lad vær med at gøre det som browser vil gøre fx den stop med at reloade siden.
         this.props.opretCitatProp(this.state);
     } 

    render() {
        return (
            <form onSubmit={this.handleGemCitat}>

                <input type="text" placeholder="Titel her..." id="citattitel" onChange={this.handleTitel} />
                <br/>
                <input type="text" placeholder="Citat her..." id="citattekst" onChange={this.handleCitatet} />
                <br/>
                <input type="text" placeholder="Forfatternavn her..." id="forfatternavn" onChange={this.handleForfatter} />
                <br/>
                <button>Gem citatet</button>

            </form>
        )
    }
}

export default OpretCitat
