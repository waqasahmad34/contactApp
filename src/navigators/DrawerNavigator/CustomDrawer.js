import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Thumbnail } from 'native-base';

const CustomDrawer = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<View
				style={{
					height: '30%',
					borderBottomColor: 'blue',
					borderBottomWidth: 3,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'green'
				}}
			>
				<View
					style={{
						borderRadius: 70,
						backgroundColor: '#fff',
						borderColor: '#fff',
						borderWidth: 2,
						width: 70,
						height: 70
					}}
				>
					<Thumbnail style={{ flex: 1, alignSelf: 'center' }} source={require('../../assets/g2.jpg')} />
				</View>
				<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: '#fff' }}>Stacey Rose</Text>
				<View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={{
							backgroundColor: '#96cb7f',
							borderColor: '#fff',
							borderWidth: 2,
							width: 20,
							height: 20
						}}
					/>

					<Text style={{ color: '#fff', fontSize: 16, paddingLeft: 5 }}>available</Text>
				</View>

				<View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
					<Image
						source={require('../../assets/location.png')}
						style={{ width: 20, height: 20, tintColor: '#fff' }}
					/>

					<Text style={{ color: '#fff', fontSize: 16, paddingLeft: 5 }}>Waltham, MA, 04:04 PM</Text>
				</View>
			</View>

			<ScrollView style={{ marginTop: 5 }}>
				<TouchableOpacity
					style={{
						flexDirection: 'row',
						borderBottomColor: '#dddddd',
						borderBottomWidth: 1,
						padding: 10,
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>Call Settings</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						borderBottomColor: '#dddddd',
						borderBottomWidth: 1,
						padding: 10
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>Prefrences</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						borderBottomColor: '#dddddd',
						borderBottomWidth: 1,
						padding: 10
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>Queues</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						borderBottomColor: '#dddddd',
						borderBottomWidth: 1,
						padding: 10
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>Test Call</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						borderBottomColor: '#dddddd',
						borderBottomWidth: 1,
						padding: 10
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>About</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						borderBottomColor: '#dddddd',
						borderBottomWidth: 1,
						padding: 10
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>Help</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						marginTop: 50,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 10,
						backgroundColor: '#fcf7fb'
					}}
				>
					<Image source={require('../../assets/location.png')} style={{ width: 20, height: 20 }} />

					<Text style={{ flex: 1, fontSize: 16, paddingLeft: 5 }}>Sign Out</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default CustomDrawer;
