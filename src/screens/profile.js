import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class profile extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}> Pusat Sparepart Honda Motor </Text>
        

        <Image style={{ width: '100%', height: 100 }} source={require("../assets/images/logo.png")}/>


        <Text> {"\n"} Sony Motor menyediakan 100% Suku cadang original Honda segala tipe. {"\n"}
                      READY STOCK 4000 item parts HGP {"\n"}
                      Konsultasi seputar sparepart dan sepeda motor Anda. {"\n"}
                      Chat / hubungi kami setiap hari Senin – Kamis, dan sabtu pukul 08:00 – 15:00 dan hari Minggu pukul 08:00 – 12:00 {"\n"}
                      Setiap hari jumat tutup. {"\n"}
                      Selamat Berbelanja 
        </Text>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    padding: 5, color: 'blue', textAlign: 'center'
  }
})
