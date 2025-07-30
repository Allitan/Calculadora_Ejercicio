import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ResultadoEjercicio } from './Modelos/ResultadoEjercicio';
import { ResultadoEntrenamiento } from './Components/ResultadoEntrenamiento';
import React from 'react';

function calcularEjercicio(horas: number[], objetivo: number): ResultadoEjercicio {
  const diasSemana = horas.length;
  const diasEntrenamiento = horas.filter(hora => hora > 0).length;
  const totalHoras = horas.reduce((a, b) => a + b, 0);
  const promedio = totalHoras / diasSemana;
  const cumplioObjetivo = promedio >= objetivo;

  let calificacion: 1 | 2 | 3;
  let explicacion: string;

  if (promedio >= objetivo) {
    calificacion = 3;
    explicacion = 'Excelente, has cumplido con tu objetivo de entrenamiento.';
  } else if (promedio >= objetivo * 0.75) {
    calificacion = 2;
    explicacion = 'Bien, pero puedes mejorar para alcanzar tu objetivo.';
  } else {
    calificacion = 1;
    explicacion = 'Necesitas esforzarte más para alcanzar tu objetivo.';
  }

  return {
    diasSemana,
    diasEntrenamiento,
    objetivo,
    promedio,
    cumplioObjetivo,
    calificacion,
    explicacion,
  };
}

export default function App() {
  const horas = [3, 2, 0, 2, 2, 3, 1];
  const objetivo = 2;

  const resultado = calcularEjercicio(horas, objetivo);

  return (
    <SafeAreaView style={styles.container}>
      <ResultadoEntrenamiento resultado={resultado} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
