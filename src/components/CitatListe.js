import React from 'react'

//props består lige nu af to tinge: allecitater...og en deletteCitat
const CitatListe = (props) => { //Props er en posekasse og er det man sender med i pakken.
                                //<CitatListe allecitaterProp={this.state.citater} /> er det som ligger i posekasse.
    
    const alleCitater = props.allecitaterProp.map (c => {
        return (
            <div key={c.id} className="citat__tekst">
            <h2> {c.titel} </h2>
            <p> {c.citattxt} </p>
            <p> <i>{c.forfatter}</i> </p>
            <button onClick={ () => {props.sletCitatProp(c.id)} } className="citat__btn">Slet</button> 
            </div>
        )
    })

    return (
        <div className="citat__wrapper">
            <div className="citat__overskrift">
            <h2>Inspiration til din citat</h2>
            </div>
            <div className="citat__container">
            { alleCitater}
            </div>
        </div>
    )
}

export default CitatListe


//Noter
//props.allecitaterProp[0].forfatter} her viser det forfatter navne nr.0 (id)

//<button onClick={ () => {props.sletCitatProp} }>Slet</button>  Her kalder vi på props.