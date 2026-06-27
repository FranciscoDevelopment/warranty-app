import { Search, FilterX } from 'lucide-react'
import { CATEGORIES } from '../categories'

interface ProductFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  categoryFilter: string
  onCategoryChange: (value: string) => void
  onReset: () => void
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
  totalProductCount,
  filteredProductCount,
  activeFilterCount,
}: ProductFiltersProps) {
  return (
    <section className="p-4 flex flex-wrap items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre..."
          aria-label="Buscar por nombre"
          value={searchQuery}
          onChange={(inputEvent) => onSearchChange(inputEvent.target.value)}
          className="pl-9 pr-3 py-2 border rounded text-sm w-64"
        />
      </div>

      <select
        value={categoryFilter}
        aria-label="Filtrar por categoría"
        onChange={(inputEvent) => onCategoryChange(inputEvent.target.value)}
        className="px-3 py-2 border rounded text-sm"
      >
        <option value="">Todas las categorías</option>
        {CATEGORIES.map((singleCategory) => (
          <option key={singleCategory.value} value={singleCategory.value}>
            {singleCategory.label}
          </option>
        ))}
      </select>

      <span className="text-sm text-gray-500">
        Mostrando {filteredProductCount} de {totalProductCount} productos
      </span>

      {activeFilterCount > 0 && (
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition-colors"
        >
          <FilterX className="w-4 h-4" />
          Limpiar filtros
        </button>
      )}
    </section>
  )
}
