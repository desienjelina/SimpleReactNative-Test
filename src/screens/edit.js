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

export default class edit extends Component {

  constructor(props){
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      productName : this.data.productName,
      description : this.data.description
    }
  }

  submitTask(){
    let body = {
      "productName" : this.state.productName,
      "description" : this.state.description
    }

    Resource.editTask(body, this.data.id)
    .then((res) => {
      this.resetForm();
      alert("Edit Sukses")
    })
    .catch((err) => {
      alert(JSON.stringify(err))
    })
  }

  resetForm(){
    this.setState({
      productName : "",
      description : ""
    })
  }

  render() {
    return (
      <View style={{padding: 30}}>
        <TextInput 
          style={myStyle.form} 
          value={this.state.productName}
          onChangeText={(task_date) => this.setState({productName})}
          placeholder="Product Name"
        />
        <TextInput 
          style={myStyle.form} 
          value={this.state.description}
          onChangeText={(task_due) => this.setState({description})}
          placeholder="Description"
        />
        <TouchableOpacity style={{marginTop: 20}} onPress={() => this.submitTask()}>
          <View style={{backgroundColor:"#F7CA18", padding: 10}}>
            <Text style={{color:"#FFF", textAlign:"center"}}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
