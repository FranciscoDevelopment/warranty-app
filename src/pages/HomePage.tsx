import { useProductFilters } from "../features/products/hooks/useProducts"
import ProductFilters from "../features/products/components/ProductFilters"
import ProductsTable from "../features/products/components/ProductsTable";
import { seedTestData, clearAllData } from "../features/products/utils/seedData"
import { useProductStore } from "../features/products/store"
import SummaryCards from "../features/home/components/SummaryCards";

export default function HomePage () {

    const totalProducts = useProductStore((storeState) => storeState.products.length)

    const {
        filteredProductsWithWarranty,
        searchQuery, setSearchQuery,
        categoryFilter, setCategoryFilter,
        resetFilters,
        totalProductCount,
        filteredProductCount,
        activeFilterCount,
    } = useProductFilters()

    return(
        <main>
            <SummaryCards />

           <h2>Garantias para tus productos</h2> 

            {totalProducts === 0 ? (
                <button
                    onClick={seedTestData}
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                >
                    Cargar datos de prueba
                </button>
            ) : (
                <button
                    onClick={clearAllData}
                    className="ml-4 px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                >
                    Limpiar todos los datos
                </button>
            )}

            <ProductFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                onReset={resetFilters}
                totalProductCount={totalProductCount}
                filteredProductCount={filteredProductCount}
                activeFilterCount={activeFilterCount}
            />

            <ProductsTable
                productsWithWarranty={filteredProductsWithWarranty}
                totalProductCount={totalProductCount}
            />

        </main>    
    )
}
