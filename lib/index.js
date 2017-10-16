/*

  Created by Benjamin De la cruz Martinez
  @kimvex on github.com
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class Prompt extends Component{

  state = {
    valor: ''
  }

  render(){

    if(this.props.visible){

      return(
        <View style={ Styles.cuerpo }>
          <View style={ Styles.contenedor }>
            <View style={ Styles.contenidoPropmt }>
              <View style={ Styles.contenedorTitulo }>
                <Text style={ Styles.titulo }>{ this.props.title }</Text>
              </View>

              <View>
                <TextInput
                  style={ Styles.textInput }
                  placeholder={ this.props.placeholder ? `${this.props.placeholder}` : 'Add data' }
                  onChangeText={() =>{

                    this.setState({ valor: valor });

                    if(this.props.onChange){

                      this.props.onChange(valor);
                    }
                  }}
                />
                <View style={ Styles.botones }>
                  <TouchableOpacity onPress={ this.props.onCancel } style={ Styles.cancelAceptar }>
                    <Text style={ Styles.textButon }>{ this.props.textCancel ? `${this.props.textCancel}` : 'Cancel' }</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={ () => this.props.onAcept(this.state.valor) } style={ Styles.cancelAceptar }>
                    <Text style={ Styles.textButon }>{ this.props.textAccept ? `${this.props.textAccept}` : 'Accept' }</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }else{
      return(
        <View>
        </View>
      );
    }
  }
}

const Styles = {

  cuerpo: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 11000,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  contenidoPropmt:{
    backgroundColor: '#ffffff',
    width: '75%',
    height: '24%'
  },
  titulo: {
    color: '#000000',
    padding: 16,
    textAlign: 'center',
    fontSize: 16,
  },
  contenedorTitulo:{
    borderBottomWidth: .25,
    borderBottomColor: 'gray',
  },
  textInput: {
    padding: 15,
    fontSize: 20,
    borderBottomWidth: .501,
    borderBottomColor: 'gray',
  },
  botones: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cancelAceptar:{
    width: '50%',
    height: '100%'
  },
  textButon: {
    fontSize: 17,
    padding: 16,
    textAlign: 'center'
  }

}

module.exports = Prompt;
