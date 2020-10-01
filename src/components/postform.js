import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setdata} from '../action/postaction'

class postform extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:"",
            body:""
        }
    }
    handleChange=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
       const  formdata={
            title:this.state.title,
             body:this.state.body
        }
        console.log("form data",formdata)
        this.props.dispatch(setdata(formdata))
        this.props.history.push("/postlists")
    }
    
    render() {
        
        return (
            <div style={{marginTop:"10px"}}>
              
                    <h5>ADD POSTS</h5>
                    <form onSubmit={this.handleSubmit}>
                        
                            <label>title</label><br/>
                            <input type="text" name="title" value={this.state.value} onChange={this.handleChange} className="form-control" required/><br/>
                        
                       
                            <label>body</label><br/>
                            <textarea className="form-control" name="body" value={this.state.body} onChange={this.handleChange}  required/><br/>
                    
                        <input type="submit" value="publish"/>
                    </form>
                </div>

            
                

        );
    }
}

export default connect() (postform);