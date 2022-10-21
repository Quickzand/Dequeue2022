import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DequeueButton from "./src/components/DequeueButton.jsx";
import Navbar from "./src/components/Navbar.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
			<Navbar></Navbar>
		</NavigationContainer>
	);
}

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Seth loves men</Text>
			<DequeueButton>
				<Text> Confirm that seth loves men </Text>
			</DequeueButton>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
