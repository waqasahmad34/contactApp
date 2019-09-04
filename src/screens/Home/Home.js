import React, { Component } from 'react';
import {
	Text,
	View,
	AsyncStorage,
	Image,
	Modal,
	TextInput,
	FlatList,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	Dimensions
} from 'react-native';
import { Header, Left, Icon, Body, Right, Title, Item, Input, Label, Form } from 'native-base';

import ContacList from '../../components/ContactList';
const { width, height } = Dimensions.get('window');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
	}


	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Header style={{ backgroundColor: '#48b4e0' }}>
					<StatusBar backgroundColor="#48b4e0" />

					<Left style={{}}>
						<TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
							<Image
								source={require('../../assets/menu.png')}
								style={{ width: 25, height: 25, tintColor: '#fff' }}
							/>
						</TouchableOpacity>
					</Left>

					<Body style={{}}>
						<Title style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Contacts</Title>
					</Body>

					<Right style={{ flex: 1, paddingRight: 4 }}>
						<TouchableOpacity>
							<Image
								source={require('../../assets/search.png')}
								style={{ width: 25, tintColor: '#fff', height: 25 }}
							/>
						</TouchableOpacity>
					</Right>
				</Header>

				<ScrollView>
					<TouchableOpacity>
						<ContacList image="../assets/b1.jpg" name="George" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/g2.jpg" name="Rose" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b1.jpg" name="Brendon" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b3.jpg" name="John" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/g2.jpg" name="Rose" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b1.jpg" name="Brendon" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b3.jpg" name="John" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/g1.jpg" name="Emily" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/g2.jpg" name="Rimmy" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b1.jpg" name="George" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/g3.jpg" name="Sarah" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b1.jpg" name="George" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/g2.jpg" name="Rose" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b1.jpg" name="Brendon" />
					</TouchableOpacity>
					<TouchableOpacity>
						<ContacList image="../assets/b3.jpg" name="John" />
					</TouchableOpacity>
				</ScrollView>

				<TouchableOpacity
					onPress={() => {
						this.setModalVisible(!this.state.modalVisible);
					}}
					style={{
						width: 60,
						height: 60,
						justifyContent: 'center',
						position: 'absolute',
						backgroundColor: '#48b4e0',
						elevation: 5,
						borderRadius: 50,
						bottom: 30,
						right: 20
					}}
				>
					<Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center', fontWeight: '500' }}>+</Text>
				</TouchableOpacity>

				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}
				>
					<View style={{ position: 'absolute', bottom: 0 }}>
						<View
							style={{
								backgroundColor: '#ffffff',
								width: width,
								height: height / 1.5
							}}
						>
							<View style={{ flex: 1, marginHorizontal: '5%' }}>
								<TextInput
									style={{
										marginTop: 5,
										borderRadius: 50,
										borderColor: '#48b4e0',
										borderWidth: 1,
										padding: 15,
										justifyContent: 'center',
										alignItems: 'center'
									}}
									placeholder="Image Url"
								/>
								<TextInput
									style={{
										marginTop: 5,
										borderRadius: 50,
										borderColor: '#48b4e0',
										borderWidth: 1,
										padding: 15,
										justifyContent: 'center',
										alignItems: 'center'
									}}
									placeholder="Name"
								/>
								<TextInput
									style={{
										marginTop: 5,
										borderRadius: 50,
										borderColor: '#48b4e0',
										borderWidth: 1,
										padding: 15,
										justifyContent: 'center',
										alignItems: 'center'
									}}
									keyboardType="numeric"
									placeholder="Number"
								/>
							</View>
							<View
								style={{
									flex: 1,
									marginHorizontal: '5%',
									justifyContent: 'center'
								}}
							>
								<TouchableOpacity
									style={{
										borderRadius: 25,
										backgroundColor: '#48b4e0',
										padding: 15,
										justifyContent: 'center',
										alignItems: 'center',
										flexDirection: 'row'
										//marginLeft: '35%'
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded-Book',
											fontSize: 16,
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.26,
											textAlign: 'center',
											color: '#ffffff'
										}}
									>
										SUBMIT
									</Text>
								</TouchableOpacity>

								<TouchableOpacity
									style={{
										borderRadius: 25,
										marginTop: 5,
										backgroundColor: '#48b4e0',
										padding: 15,
										justifyContent: 'center',
										alignItems: 'center',
										flexDirection: 'row'
										//marginLeft: '35%'
									}}
									onPress={() => {
										this.setModalVisible(!this.state.modalVisible);
									}}
								>
									<Text
										style={{
											fontFamily: 'GothamRounded-Book',
											fontSize: 16,
											fontWeight: '500',
											fontStyle: 'normal',
											letterSpacing: 0.26,
											textAlign: 'center',
											color: '#ffffff'
										}}
									>
										CANCEL
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

export default Home;
