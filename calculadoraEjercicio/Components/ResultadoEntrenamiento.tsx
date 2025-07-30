import { View, Text } from 'react-native';
import React from 'react';
import { ResultadoEjercicio } from '../Modelos/ResultadoEjercicio';

interface Props {
    resultado: ResultadoEjercicio;
}


export const ResultadoEntrenamiento = ({ resultado }: Props) => {
    return (
      <View style={{ padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10 }}>
      <Text>Días en la semana: {resultado.diasSemana}</Text>
      <Text>Días de entrenamiento: {resultado.diasEntrenamiento}</Text>
      <Text>Objetivo diario: {resultado.objetivo} hrs</Text>
      <Text>Promedio semanal: {resultado.promedio.toFixed(2)} hrs</Text>
      <Text>¿Cumplió el objetivo?: {resultado.cumplioObjetivo ? 'Sí' : 'No'}</Text>
      <Text>Calificación: {resultado.calificacion}</Text>
      <Text>Explicación: {resultado.explicacion}</Text>
    </View>
    )

}
