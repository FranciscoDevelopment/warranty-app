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

            <ProductFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                onReset={resetFilters}
                onClearAllData={totalProducts === 0 ? seedTestData : clearAllData}
                hasProducts={totalProducts > 0}
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
