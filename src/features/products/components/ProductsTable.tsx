import type { importanceT } from "../types";
import type { ProductRow } from "../hooks/useProducts";
import { CATEGORIES } from "../categories";
import { getWarrantyStatus } from "../../warranty/utils/warrantyStatus.js";

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

    const getRowClasses = (expiryDate?: string) => {
        const status = getWarrantyStatus(expiryDate)

        switch (status?.variant) {
            case "valid":
                return "bg-green-50/70"
            case "expiring-soon":
                return "bg-amber-50/70"
            case "expired":
                return "bg-red-50/70"
            default:
                return ""
        }
    }

    const getStatusBadge = (expiryDate?: string) => {
        const status = getWarrantyStatus(expiryDate)

        if (!status) return null

        const statusLabel = {
            expired: { text: "Vencido", className: "bg-red-100 text-red-700 border border-red-200" },
            "expiring-soon": { text: "Próximo a vencer", className: "bg-amber-100 text-amber-700 border border-amber-200" },
            valid: { text: "Vigente", className: "bg-green-100 text-green-700 border border-green-200" }
        }

        const config = statusLabel[status.variant]

        return (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}>
                {config.text}
            </span>
        )
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
                        <th className="px-6 py-4 font-semibold">Estado</th>
                        <th className="px-6 py-4 font-semibold">Estimación del plazo de cobertura</th>
                    </tr>
                </thead>

                <tbody>
                    {productsWithWarranty.map((productRow) => {
                        const rowClasses = getRowClasses(productRow.warranty?.expiryDate)

                        return (
                        <tr key={productRow.id}
                        className={`border-b border-slate-100 transition-colors hover:bg-slate-50 ${rowClasses}`}
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
                                {getStatusBadge(productRow.warranty?.expiryDate)}
                            </td>
                            <td className="px-4 py-2">
                                {productRow.warranty?.warrantyTerm ?? "—"}
                            </td>
                        </tr>
                        )
                    })}
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
