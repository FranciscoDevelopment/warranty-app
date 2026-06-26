import type { productT } from "../products/types";


export type warrantyTermT = "short" | "medium" | "long" ;


export type warrantyT = {

    id : string ;

    warrantyTerm : warrantyTermT ;

    expiryDate : string ;

    remainingMonths : number ;

}


export type warrantiesInStateT = {

    warranties : warrantyT[]

}

export type temporalThresholdsT = Record< productT['importance'] , {
    short : number ;
    long : number
} >

// Re-exportamos para que el store no dependa de products/types directamente
export type {productT} ;