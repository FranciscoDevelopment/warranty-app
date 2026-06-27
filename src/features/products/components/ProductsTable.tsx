import type { importanceT } from "../types";
import type { ProductRow } from "../hooks/useProducts";
import { CATEGORIES } from "../categories";

interface ProductsTableProps {
  productsWithWarranty: ProductRow[]
  totalProductCount: number
}

export default function ProductsTable ({ productsWithWarranty, totalProductCount }: ProductsTableProps) {

    const importanceLabel : importanceT = {

        High: "Alta",

        Medium: "Media",

        Low: "Baja"

    }

    const getCategoryLabel = (categoryValue: string): string => {
        const foundCategory = CATEGORIES.find(
            (category) => category.value === categoryValue
        )
        return foundCategory?.label ?? categoryValue
    }

    return(
    
        <section className="p-4 overflow-x-auto">

            <table className="w-full text-sm border-collapse">

                <caption className="sr-only">Listado de productos con garantía</caption>

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
                    {productsWithWarranty.map((productRow) => (

                        <tr key={productRow.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border">{productRow.name}</td>
                            <td className="px-4 py-2 border">{getCategoryLabel(productRow.category)}</td>
                            <td className="px-4 py-2 border">${productRow.price}</td>
                            <td className="px-4 py-2 border">{ importanceLabel[productRow.importance] }</td>
                            <td className="px-4 py-2 border">{productRow.purchaseDate}</td>
                            <td className="px-4 py-2 border">
                                {productRow.warranty?.expiryDate
                                    ? new Date(productRow.warranty.expiryDate).toLocaleDateString()
                                    : "—"}
                            </td>
                            <td className="px-4 py-2 border">
                                {productRow.warranty?.remainingMonths ?? "—"}
                            </td>
                            <td className="px-4 py-2 border">
                                {productRow.warranty?.warrantyTerm ?? "—"}
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>

            {productsWithWarranty.length === 0 && (
                <p className="text-center text-gray-400 mt-4">
                    {totalProductCount === 0
                        ? "No hay productos registrados."
                        : "No se encontraron productos con los filtros actuales."}
                </p>
            )}

        </section>
        
    
    )
}
