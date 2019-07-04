import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';
import botao from '../imgs/arrow.png'
export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.bandalarga = this.bandalarga.bind(this);
    }

    bandalarga(){}
    static navigationOptions = {
      header:null
      
    }
  render() {
    return (
      <View style={styles.viewPrincipal}>

        <View style={styles.viewText}>
          <Text style={styles.textPrincipal}>OI!</Text>
         <Text style={styles.textPrincipal}>Pra qual produto você deseja atendimento?</Text>
        </View>

      <View style={{flex:1}}>
        <TouchableHighlight onPress={()=> this.props.navigation.navigate('bandaLarga')} >
              <View style = {{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:80}}>
                <Text style={styles.botaoTxt}>Banda Larga</Text>
                <Image style={styles.botoes} source={botao}/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=> this.props.navigation.navigate('fixo')} >
              <View style = {{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:80}}>
                <Text style={styles.botaoTxt}>Fixo</Text>
                <Image style={styles.botoes} source={botao}/>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.bandalarga} >
              <View style = {{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:80}}>
                <Text style={styles.botaoTxt}>TV</Text>
                <Image style={styles.botoes} source={botao}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.bandalarga} >
              <View style = {{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginTop:80}}>
                <Text style={styles.botaoTxt}>Fibra</Text>
                <Image style={styles.botoes} source={botao}/>
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
  textPrincipal:{
    color:'white',
    fontSize:28,
  },
  viewText:{
    paddingLeft:20,
    paddingRight:20

  },
  botoes:{
    height:25,
    width:25,
    
  },
  botaoTxt:{
    fontSize:20,
    color:'white'
  }

})
