import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions/index';


class RoleSelector extends Component {

    static navigationOptions = {
        title: 'Oneness',
        headerStyle: {
          backgroundColor: '#4F6D7A',
          alignItems:'center'
        }
    }
    render() {
        return (
            <View>
                <Text>{this.props.information.role}</Text>
                <TouchableOpacity onPress={() => {
                    this.props.setRole('User')
                    this.forceUpdate();
                }}>
                    <Text>Chnage Role</Text>
                </TouchableOpacity>
            </View>
        )
    }

}
const mapStateToProps = state => {
    return { information: state }
}
export default connect(mapStateToProps, actions)(RoleSelector);