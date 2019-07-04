import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableHighlight,Image} from 'react-native';

import wifi from '../imgs/wifi.png';
import lenta from '../imgs/lenta.png';
import agenda from '../imgs/agenda.png';
import queda from '../imgs/queda.png';

export default class bandaLargaEntrar extends Component {
    static navigationOptions = {
      title:'Banda Larga',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor:'#8A2BE2',
        
      },
    }
  render() {
    return (
      <View  style={styles.viewPrincipal}>
        <Text style={styles.font}>Qual tipo de reparo presica?</Text>


        <TouchableHighlight>
              <View style = {styles.viewTouch}>
                <Image style={styles.botoes} source={wifi}/>
                <Text style={styles.botaoTxt}>SEM CONEXÃO</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight>
              <View style = {styles.viewTouch}>
                <Image style={styles.botoes2} source={lenta}/>
                <Text style={styles.botaoTxt}>INTERNET LENTA</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight>
              <View style = {styles.viewTouch}>
                <Image style={styles.botoes2} source={queda}/>
                <Text style={styles.botaoTxt3}>QUEDAS CONSTANTES</Text>
              </View>
            </TouchableHighlight>

            <Text style={styles.font}>Precisa de mais ajusta?</Text>

            <TouchableHighlight>
              <View style = {styles.viewTouch}>
                <Image style={styles.botoes2} source={agenda}/>
                <Text style={styles.botaoTxt3}>VISITAS TÉCNICAS</Text>
              </View>
            </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewPrincipal:{
        flex:1,
        backgroundColor:'#8A2BE2'
    },
    font:{
        fontSize:20,
        color:'white',
        
    },
    botaoTxt:{
        color:'black',
        fontSize:17,
        fontWeight:'bold',
        marginRight:150
    },
    botaoTxt3:{
        color:'black',
        fontSize:17,
        fontWeight:'bold',
        marginRight:100
    },
    botoes:{
        height:30,
        width:50,
        marginLeft:15
    },
    botoes2:{
        height:50,
        width:50,
        marginLeft:15
    },
    viewTouch:{
        backgroundColor:'white',
        width:380,
        height:75,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        alignItems:'center',
    }
})