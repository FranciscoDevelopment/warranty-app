import { useWarrantyStore } from "../../warranty/store";
import { useProductStore } from "../store"
import type { importanceT } from "../types";

export default function ProductsTable () {

    const products = useProductStore( (state) => state.products ) ;

    const warranties = useWarrantyStore( (state) => state.warranties ) ;


    const importanceLabel : importanceT = {

        High: "Alta",
        Medium: "Media",
        Low: "Baja"

    }


    // Join por id

    const rows = products.map( (product) => ({      // return { <object> } implicito

        ...product,
        warranty: warranties.find( (warranty) => warranty.id === product.id )

    }) )

    return(
    
        <section className="p-4 overflow-x-auto">

            <table className="w-full text-sm border-collapse">

                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 border">Producto</th>
                        <th className="px-4 py-2 border">Categoría</th>
                        <th className="px-4 py-2 border">Precio</th>
                        <th className="px-4 py-2 border">Importancia</th>
                        <th className="px-4 py-2 border">Fecha compra</th>
                        <th className="px-4 py-2 border">Vencimiento</th>
                        <th className="px-4 py-2 border">Meses restantes</th>
                        <th className="px-4 py-2 border max-w-26 whitespace-normal">Estimación del plazo de cobertura</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (

                        <tr key={row.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border">{row.name}</td>
                            <td className="px-4 py-2 border">{row.category}</td>
                            <td className="px-4 py-2 border">${row.price}</td>
                            <td className="px-4 py-2 border">{ importanceLabel[row.importance] }</td>
                            <td className="px-4 py-2 border">{row.purchaseDate}</td>
                            <td className="px-4 py-2 border">
                                {row.warranty?.expiryDate
                                    ? new Date(row.warranty.expiryDate).toLocaleDateString()
                                    : "—"}
                            </td>
                            <td className="px-4 py-2 border">
                                {row.warranty?.remainingMonths ?? "—"}
                            </td>
                            <td className="px-4 py-2 border">
                                {row.warranty?.warrantyTerm ?? "—"}
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>

            {rows.length === 0 && (
                <p className="text-center text-gray-400 mt-4">No hay productos registrados.</p>
            )}

        </section>
        
    
    )
}