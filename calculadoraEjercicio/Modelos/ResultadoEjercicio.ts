export interface ResultadoEjercicio {
    diasSemana: number;
    diasEntrenamiento: number;
    objetivo: number;
    promedio: number;
    cumplioObjetivo: boolean;
    calificacion: 1 | 2 | 3;
    explicacion: string;

}