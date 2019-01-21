import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
    getList(){
        if(this.props.vidList){
            this.props.vidList.forEach(item => {
                console.log(item)
            })
        }
    }
    render() {
        this.getList();
        return (
            <div>
                Video List
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        vidList: state.vidList
    }
}

export default connect(mapStateToProps)(VideoList);