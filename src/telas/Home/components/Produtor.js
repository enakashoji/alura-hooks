import React, {useMemo, useReducer, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from './Estrelas';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',

    //Android
    elevation: 4,

    //iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 5,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
  },
});
