import React, { Component } from 'react'
import {
    Card, Paper, Typography
} from '@material-ui/core'

import {
    fetchDetails,
    fetchImages
} from '../actions/fetchData'

export default class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = { 
            images:[],
            im:""
        }
    }

     async componentDidMount(){
        await fetchImages()
            .then( (res)=>{ 
                 this.setState({images:res})
                 this.setState({im:this.state.images[this.props.ind%5]['image']})
            })  
        // console.log("Props : " , this.state.images[0]['image']) 
    }
 
    render() {
        return ( 
                <Paper style={{display:"flex" , flexDirection:"row" , width:200 , margin:5}} elevation={12} >
                    <div style={{margin:10}} >
                        <img style={{width:50,height:50}} src={this.state.im}  />
                    </div>
                    <div style={{margin:10}} >
                        <Typography style={styles.typ} >abv : {this.props.abv}</Typography>
                        <Typography style={styles.typ} >ibu : {this.props.ibu}</Typography>
                        <Typography style={styles.typ} >id : {this.props.id}</Typography>
                        <Typography style={styles.typ} >name : {this.props.name}</Typography>
                        <Typography style={styles.typ} >style : {this.props.style}</Typography>
                        <Typography style={styles.typ} >ounces : {this.props.ounces}</Typography>
                    </div>
                </Paper> 
        )
    }
}

const styles = {
    typ:{
        fontSize:12
    }
}
