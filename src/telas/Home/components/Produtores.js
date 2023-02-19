import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import useProdutores from '../../../hooks/useProdutores';

import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const cabecalho = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={cabecalho}
      data={lista}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Produtor {...item} />}
    />
  );
}

export const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    margin: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
