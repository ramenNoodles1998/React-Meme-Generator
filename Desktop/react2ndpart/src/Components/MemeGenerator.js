import React from "react"


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
     
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=>{
            
            return response.json()
        })
        .then(data=>{
            const {memes} = data.data
            this.setState(prevState=>{
                
                prevState.allMemeImgs=memes
                
                return prevState
            })
        })
    }
    handleChange=(event)=>{
        
        const{name, value} = event.target
        
        
        this.setState({[name]:value})
        
        

    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const randomNumber =  Math.floor(Math.random()*this.state.allMemeImgs.length);
        const randomImg = this.state.allMemeImgs[randomNumber].url
        this.setState({image: randomImg})

        

    }
    render(){
        
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input name="topText"  placeholder="Top Text"  value = {this.state.topText} onChange={this.handleChange}/>
                    <input name="bottomText" placeholder="Bottom Text"  value = {this.state.bottomText} onChange={this.handleChange}/>
                    <button >Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.image} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}
export default MemeGenerator