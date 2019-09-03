import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

export default class FetchExample extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoading: true }
	}

	componentDidMount() {
		return fetch('http://www.mocky.io/v2/5d6c8a3f3300005900346dc8')
			.then((response) => response.json())
			.then((responseJson) => {

				this.setState({
					isLoading: false,
					dataSource: responseJson.data,
				}, function () {

				});

			})
			.catch((error) => {
				console.error(error);
			});
	}



	render() {

		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<ActivityIndicator />
				</View>
			)
		}

		return (
			<View style={{ flex: 1, paddingTop: 20 }}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({ item, index }) =>
					<TouchableOpacity onPress={() => {
						this.props.navigation.navigate("DetailScreen",{
						  data: this.state.dataSource[index]
						})}
					  }>
						<View style={{marginBottom:20, padding:20, borderBottomColor: "#aaa", borderBottomWidth: 1, flexDirection: "row"}}>
						  <View style={{flex:1}}>
						  <Image
								style={{ width: '100%', height: 50 }}
								source={{ uri: item.brand.image }}
							/>
						  <Text style={styles.productName}>{item.productName}</Text>
							<Text style={styles.productName}>{item.brand.brandName}</Text>
						  </View>
						  <TouchableOpacity style={{marginHorizontal:10}} onPress={() => {
							this.props.navigation.navigate("DetailScreen", {
							  data: this.state.dataSource[index]
							})
							}}>
							<View style={{backgroundColor:"#2ecc71", justifyContent:"center", alignItems:"center", width:50, height:50, borderRadius: 15}}>
							  <Image style={{width: 13, height:13, tintColor:"#FFF"}} source={require("../assets/images/detail.png")}/>
							</View>
						  </TouchableOpacity>
						
						</View>
					  </TouchableOpacity>
					}
					keyExtractor={({ id }, index) => id}
				/>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	productBox: {
		padding: 1, margin: 20, borderColor: 'orange', borderBottomWidth: 1
	},
	productName: {
		padding: 1, color: 'blue', textAlign: 'center'
	}
})