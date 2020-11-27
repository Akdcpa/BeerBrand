import React, { Component } from 'react'

import MainComponent from '../components/MainComponent'
import {
    Typography,
    Grid
} from '@material-ui/core'
 
import {withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types'
import SearchBar from "material-ui-search-bar";
import {
    fetchDetails,
    fetchImages
} from '../actions/fetchData'

const craftApi = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activePage: 15,
          data:[],
          start:0, 
          value:''
        };
    }

    async componentDidMount(){
       await fetchDetails()
            .then(async (res)=>{ 
                await this.setState({data:res}) 
            }) 
        
    }

    searchItem(data){
        const jsonData = this.state.data;
        for(var i=0;i<this.state.data.length;i++){
            if(jsonData[i]['name'] == data){
              console.log('The value is: ' + jsonData[i]['name']);
              break;
            }
          }
    }
       
    render() { 
        return (

            <div>
                <div style={styles.head} > 
                    <Typography style={styles.title} >Beer Brands</Typography>
                    <Pagination classes={{
                                    root:pageStyle.tablePaginationActions
                                }}  
                                count={Math.ceil(this.state.data.length/21)} 
                                color="secondary" 
                                onChange={(event,number)=>this.setState({start:0+(number-1)*21})}
                                /> 
                    <SearchBar
                            value={this.state.value}
                            onChange={(newValue) => this.setState({ value: newValue })}
                            onRequestSearch={() => this.searchItem(this.state.value)}
                        />
                </div>
               
                <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between"}} >
                    {
                        this.state.data.slice(this.state.start,this.state.start+7).map((item,ind)=>{
                            return(
                                    <MainComponent  
                                            ind = {ind}
                                            abv={item.abv}
                                            ibu={item.ibu}
                                            id={item.id}
                                            name={item.name}
                                            style={item.style}
                                            ounces={item.ounces} 
                                        /> 
                            )
                        })
                    }
                </div>
                <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between"}} >
                    {
                        this.state.data.slice(this.state.start+7,this.state.start+14).map((item,ind)=>{
                            return(
                                    <MainComponent  
                                            ind = {ind}
                                            abv={item.abv}
                                            ibu={item.ibu}
                                            id={item.id}
                                            name={item.name}
                                            style={item.style}
                                            ounces={item.ounces} 
                                        /> 
                            )
                        })
                    }
                </div>
                <div style={{display:"flex" , flexDirection:"row" , justifyContent:"space-between"}} >
                    {
                        this.state.data.slice(this.state.start+14,this.state.start+21).map((item,ind)=>{
                            return(
                                    <MainComponent  
                                            ind = {ind}
                                            abv={item.abv}
                                            ibu={item.ibu}
                                            id={item.id}
                                            name={item.name}
                                            style={item.style}
                                            ounces={item.ounces} 
                                        /> 
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const pageStyle = theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
      }, 
})

const styles = {
    head:{
        height:60,
        display:"flex",
        justifyContent:"space-evenly",
        backgroundColor:"#B4B4B4",
        alignItems:"center"
    },
    title:{
        fontSize:22,
        fontWeight:"bold", 
        color:"black"
    }
} 

export default withStyles(pageStyle)(Main);