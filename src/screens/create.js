import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import Resource from '../network/Resource'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#EFEFEF", 
    backgroundColor: "#FEFEFE",
    borderWidth: 1, 
    height: 30, 
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    marginBottom: 10
  }
})

export default class create extends Component {

  constructor(props){
    super(props)

    this.state = {
      // brandId : "",
      // colour : "",
      description : "",
      // district : "",
      // extendInfo : "",
      // location : "",
      productName : "",
      // province : "",
      // subDistrict : ""
    }
  }

  submitTask(){
    let body = {
      // "brandId" : this.state.brandId,
      // "colour" : this.state.colour,
      "description" : this.state.description,
      // "district" : this.state.district,
      // "extendInfo" : this.state.extendInfo,
      // "location" : this.state.location,
      "productName" : this.state.productName,
      // "province" : this.state.province,
      // "subDistrict" : this.state.subDistrict
    }

    Resource.addProduct(body)
    .then((res) => {
      this.resetForm();
      alert("Submit Sukses")
    })
    .catch((err) => {
      alert(JSON.stringify(err))
    })
  }

  resetForm(){
    this.setState({
      // brandId : "",
      // colour : "",
      description : "",
      // district : "",
      // extendInfo : "",
      // location : "",
      productName : "",
      // province : "",
      // subDistrict : ""
    })
  }

  render() {
    return (
      <View style={{padding: 30}}>
        {/* <TextInput 
          style={myStyle.form} 
          value={this.state.brandId}
          onChangeText={(brandId) => this.setState({brandId})}
          placeholder="Brand"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.colour}
          onChangeText={(colour) => this.setState({colour})}
          placeholder="Colour"
        /> */}
        <TextInput 
          style={myStyle.form} 
          value={this.state.description}
          onChangeText={(description) => this.setState({description})}
          placeholder="Description"
        />
        {/* <TextInput 
          style={myStyle.form} 
          value={this.state.district}
          onChangeText={(district) => this.setState({district})}
          placeholder="District"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.extendInfo}
          onChangeText={(extendInfo) => this.setState({extendInfo})}
          placeholder="Extend Info"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.location}
          onChangeText={(location) => this.setState({location})}
          placeholder="Location"
        /> */}
        <TextInput 
          style={myStyle.form} 
          value={this.state.productName}
          onChangeText={(productName) => this.setState({productName})}
          placeholder="Product Name"
        />
        {/* <TextInput 
          style={myStyle.form} 
          value={this.state.province}
          onChangeText={(province) => this.setState({province})}
          placeholder="Province"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.subDistrict}
          onChangeText={(subDistrict) => this.setState({subDistrict})}
          placeholder="Sub District"
        /> */}
        
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitTask()}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
