export interface respuestasUser{
    respuestas: number[];
}
export interface Recurso{
    id : string
    title: string
    authors: string[]
    description: string
    url:string
    thumbnai : string

}

export interface EstiloAprendizaje{
    tema_principal: string
    estilo_aprendizaje: string
    subtemas: {
        [subtema: string]: Recurso
    }
    recomendacion_general: string
}