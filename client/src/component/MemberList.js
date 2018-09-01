import React,{ Component } from "react";
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MemberCard from "./MemberCard";
import { getMembers } from "../queries/queries";
const styles = theme => ({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  });

class MemberList extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:props.classes
        }
    }

    displayTimelines = ()=>{
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading members...</div> );
        } else {
          return data.members.map(member => {
            return (
                <MemberCard key={member.id}
                name={member.name} 
                intro={member.intro}
                section={member.section}
                imgUrl={member.imgUrl} />
            );
          })
        }
      }

    render=()=>{
        return(
            <Grid container spacing={40} className={this.state.classes.cardGrid}>
                {this.displayTimelines()}
            </Grid>
        );
    }
}

MemberList.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default graphql(getMembers)(withStyles(styles)(MemberList));

