import React,{Component} from "react";

class PageLayout extends Component{

    render(){
        return( 
        <div>
            {this.props.children}
        </div>
        )
 
    }
}

export default PageLayout;