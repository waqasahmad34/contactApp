import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Header, Left, Icon, Body, Right, Title, Thumbnail } from 'native-base';

class ContactList extends Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'row', margin: 15 }}>
				<View style={{ flex: 0.5 }} />
				<View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center' }}>
					<Thumbnail small source={require('../assets/g1.jpg')} />
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
					<Text style={{ paddingLeft: 15, fontSize: 16 }}> {this.props.name} </Text>
				</View>
			</View>
		);
	}
}

export default ContactList;
