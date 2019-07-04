import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableHighlight} from 'react-native';

export default class bandaLarga extends Component {
    static navigationOptions = {
      title:'Banda Larga',
      headerTintColor: "white",
      headerStyle: {
        backgroundColor:'#8A2BE2',
        
      },
    }
  render() {
    return (
      <View style={styles.viewPrincipal} >
        <Text style = {styles.txt}>Digite o CPF / CNPJ e o número do seu Fixo da OI</Text>


        <View style = {styles.viewNum}>

        <View>
            <Text style={styles.font}>DDD</Text>
            <View style={{borderRadius: 1,borderWidth: 0.5,borderColor: 'white',}}>
                <TextInput keyboardType={'numeric'} style={styles.input} />
            </View>
        </View>

        <View>
            <Text style={styles.font} >Telefone Fixo</Text>
            <View style={{borderRadius: 1,borderWidth: 0.5,borderColor: 'white',}}>  
                <TextInput style={styles.input2} keyboardType={'numeric'}/>
            </View>
        </View>

        </View>

        <View style={styles.viewNum2}>
            <Text style={styles.font}>CPF ou CNPJ</Text>
            <View style={{borderRadius: 1,borderWidth: 1,borderColor: 'white',}}>  
                <TextInput style={styles.input3} keyboardType={'numeric'}/>
            </View>
            <Text style={{color:'white'}}>Use o CPF/CNPJ do titular</Text>
        </View>

            <View>
            <TouchableHighlight onPress={()=> this.props.navigation.navigate('bandaLargaEntrar')}>
              <View style = {styles.botaoEntrar}>
                <Text style={{fontSize:22,color:'white',}}>Entrar</Text>
              </View>
            </TouchableHighlight>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewPrincipal:{
        flex:1,
        backgroundColor:'#8A2BE2'
    },
    txt:{
        fontSize:25,
        color:'white',
        justifyContent:'center',
        margin:30
    },
    viewNum:{
        flexDirection:'row',
        marginLeft:35,
    },
    viewNum2:{
        marginLeft:30,
        marginRight:30,
        marginTop:15
    },
    input:{
        margin:10,
        width:50,
        height:40,
        fontSize:15,
        color:'white'
        
    },
    input2:{
        margin:10,
        width:80,
        height:40,
        fontSize:15,
        color:'white'    
    },
    input3:{
        margin:10,
        width:100,
        height:40,
        fontSize:15,
        color:'white'    
    },
    font:{
        fontSize:20,
        color:'white'
    },
    botaoEntrar:{
        width:350,
        height:70,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:20,
        marginTop:80,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'white',

    }
})
