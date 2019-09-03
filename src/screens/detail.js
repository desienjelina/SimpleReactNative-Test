import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class detail extends Component {
  constructor(props){
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <View style={{padding: 20}}>
        <Text>Product Name : {this.data.productName}</Text>
        <Text>Plat No : {this.data.platNo}</Text>
        <Text>Ref No : {this.data.refNo}</Text>
        <Text>Year : {this.data.year}</Text>
        <Text>Colour : {this.data.colour}</Text>
        <Text>Transmission : {this.data.transmission}</Text>
        <Text>Location : {this.data.location}</Text>
        <Text>Mileage : {this.data.mileage}</Text>
        <Text>Price : {this.data.price}</Text>
        <Text>Description : {this.data.description}</Text>
        <Text>Title : {this.data.title}</Text>
        <Text>Status : {this.data.status}</Text>
        <Text>Updated Date : {this.data.updatedDate}</Text>
        <Text>Province : {this.data.province}</Text>
        <Text>District : {this.data.district}</Text>
        <Text>Sub District : {this.data.subDistrict}</Text>
        <Text>Brand : {this.data.brand.brandName}</Text>
        <Text>Series : {this.data.series.seriesName}</Text>
      </View>
    )
  }
}
