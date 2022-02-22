const React=require('react');

class New extends React.Component{
    render(){
        return(
            <div><h1>Create a new pokemon</h1>
            <nav>
                <a href='/pokemon'>Back to pokemon main page</a>
            </nav>
            <form action='/pokemon' method='POST'>
                Name: <input name="name" type='text'/><br/>
                url: <input name='img' type='text' /> <br/>
                <input type='submit' value='create a Pokemon'/>

            </form> 


            </div>
        )
    }

}
module.exports=New;