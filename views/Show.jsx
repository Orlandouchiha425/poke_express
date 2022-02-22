const React = require('react');

class Show extends React.Component {
    render(){
        const pokemon= this.props.pokemon
        return (
            <div>

                <h1>Gotta Catch 'Em All</h1>
               
                <a href="/pokemon">Go Back to the Index</a>
              
                {/* <a href='/pokemon'>This will take you back to Index</a> */}
                <p>{capitalizeFirstCharacter(pokemon.name)}</p>
                <img src={`${pokemon.img}.jpg`}/>
               
            
            </div>
        );  
    }
}


module.exports = Show;


 {/* <h2>{pokemon.name}</h2> */}

/* <img src={`${pokemon.img}.jpg`}></img> */

const capitalizeFirstCharacter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
}