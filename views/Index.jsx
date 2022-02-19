const React = require('react')

class Index extends React.Component {
    render(){
        const pokemon=this.props.pokemon   
        return (
            <div>
                <h1>See all The Pokemon!</h1>
                <nav>
                    <a href='/'>Go to the home page</a>
                </nav>
                <ul>
                {
                    pokemon.map((pokeball) => {
                        return (
                            <li key={`${pokeball._id}`}><a href={`/pokemon/${pokeball._id}`}>{capitalizeFirstCharacter(pokeball.name)}</a></li>
                        )
                    })
                }
                </ul> 
                
                
            </div>
        )
    }

}

const capitalizeFirstCharacter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
}

module.exports=Index;

