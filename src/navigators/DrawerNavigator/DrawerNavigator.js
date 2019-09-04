import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from './CustomDrawer';
import Home from '../../screens/Home/Home';

const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: Home
		}
	},
	{
		contentComponent: (props) => <CustomDrawer {...props} />
	}
);

const AppContainer = createAppContainer(DrawerNavigator);

export default AppContainer;
