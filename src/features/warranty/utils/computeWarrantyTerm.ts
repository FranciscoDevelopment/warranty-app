import { addMonths, differenceInMonths, parseISO } from "date-fns"
import type { temporalThresholdsT, warrantyTermT } from "../types"
import type { productT } from "../types"


const PRICE_HIGH = 2000 as const
const PRICE_MID  = 500  as const


function GetPriceBonus ( price : number ) : number {

    if( price >= PRICE_HIGH ) return 6 ;

    if( price >= PRICE_MID ) return 3 ;

    
    return 0 ;

}



export function ComputeWarrantyTerm ( product : productT, thresholds : temporalThresholdsT ) : warrantyTermT {

    const expiry = addMonths( parseISO( product.purchaseDate ) , product.durationMonths ) ;

    const remaining = differenceInMonths( expiry, new Date() ) 

    const bonus = GetPriceBonus( Number( product.price ) ) ;

    const effective = remaining + bonus


    const { short, long } = thresholds[product.importance]


    if( effective <= short ) return "short" ;

    if( effective <= long ) return "medium" ;

    return "long" 

}