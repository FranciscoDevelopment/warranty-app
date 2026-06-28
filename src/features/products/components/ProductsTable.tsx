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
    
        <section className="mb-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">

    <div>

        <h2 className="text-lg font-semibold text-slate-800">
            Productos registrados
        </h2>

        <p className="text-sm text-slate-500">
            Listado de todas las garantías
        </p>

    </div>

</div>
            <table className="w-full min-w-[900px] text-sm">

                <caption className="sr-only">Listado de productos con garantía</caption>

                <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-600 uppercase text-xs tracking-wide">
                        <th className="px-6 py-4 font-semibold">Producto</th>
                        <th className="px-6 py-4 font-semibold">Categoría</th>
                        <th className="px-6 py-4 font-semibold">Precio</th>
                        <th className="px-6 py-4 font-semibold">Importancia</th>
                        <th className="px-6 py-4 font-semibold">Fecha compra</th>
                        <th className="px-6 py-4 font-semibold">Vencimiento</th>
                        <th className="px-6 py-4 font-semibold">Meses restantes</th>
                        <th className="px-6 py-4 font-semibold">Estimación del plazo de cobertura</th>
                    </tr>
                </thead>

                <tbody>
                    {productsWithWarranty.map((productRow) => (

                        <tr key={productRow.id}
                        className="border-b border-slate-100 transition-colors hover:bg-slate-50"
                        >
                            <td className="px-6 py-4">{productRow.name}</td>
                            <td className="px-6 py-4">{getCategoryLabel(productRow.category)}</td>
                            <td className="px-6 py-4">${productRow.price}</td>
                            <td className="px-6 py-4">{ importanceLabel[productRow.importance] }</td>
                            <td className="px-6 py-4">{productRow.purchaseDate}</td>
                            <td className="px-6 py-4">
                                {productRow.warranty?.expiryDate
                                    ? new Date(productRow.warranty.expiryDate).toLocaleDateString()
                                    : "—"}
                            </td>
                            <td className="px-4 py-2">
                                {productRow.warranty?.remainingMonths ?? "—"}
                            </td>
                            <td className="px-4 py-2">
                                {productRow.warranty?.warrantyTerm ?? "—"}
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>

            {productsWithWarranty.length === 0 && (
                <p className="py-8 text-center text-slate-400">
                    {totalProductCount === 0
                        ? "No hay productos registrados."
                        : "No se encontraron productos con los filtros actuales."}
                </p>
            )}

        </section>
        
    
    )
}
