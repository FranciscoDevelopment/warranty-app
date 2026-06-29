import { Search, FilterX } from 'lucide-react'
import { CATEGORIES } from '../categories'

interface ProductFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  categoryFilter: string
  onCategoryChange: (value: string) => void
  onReset: () => void
  onClearAllData: () => void
  hasProducts: boolean
  totalProductCount: number
  filteredProductCount: number
  activeFilterCount: number
}

export default function ProductFilters({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  onReset,
  onClearAllData,
  hasProducts,
  totalProductCount,
  filteredProductCount,
  activeFilterCount,
}: ProductFiltersProps) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre..."
            aria-label="Buscar por nombre"
            value={searchQuery}
            onChange={(inputEvent) => onSearchChange(inputEvent.target.value)}
            className="
            w-full
            md:w-72
            rounded-xl
            border
            border-slate-300
            bg-white
            pl-10
            pr-4
            py-2.5
            text-sm
            focus:border-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-200 "
          />
        </div>
      <select
        value={categoryFilter}
        aria-label="Filtrar por categoría"
        onChange={(inputEvent) => onCategoryChange(inputEvent.target.value)}
        className="
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-2.5
        text-sm
        focus:border-blue-500
        focus:outline-none
        focus:ring-2
        focus:ring-blue-200
"
      >
        <option value="">Todas las categorías</option>
        {CATEGORIES.map((singleCategory) => (
          <option key={singleCategory.value} value={singleCategory.value}>
            {singleCategory.label}
          </option>
        ))}
      </select>
    </div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-slate-500">
            Mostrando {filteredProductCount} de {totalProductCount} productos
          </span>

          <button
            onClick={onClearAllData}
            className={`
            flex
            w-fit
            items-center
            gap-2
            rounded-xl
            border
            px-4
            py-2
            text-sm
            font-medium
            transition
            ${hasProducts
              ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
              : 'border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100'}
            `}
          >
            {hasProducts ? 'Limpiar todos los datos' : 'Cargar datos de prueba'}
          </button>
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-4
            py-2
            text-sm
            font-medium
            text-red-600
            transition
            hover:bg-red-100
            "
          >
            <FilterX className="w-4 h-4" />
            Limpiar filtros
          </button>
        )}
      </div>
    </section>
  )
}
