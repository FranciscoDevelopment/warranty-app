import { createBrowserRouter } from 'react-router-dom'
import { ProductList } from '../features/products/components/ProductList'
import HomeLayout from '../features/home/layouts/HomeLayout'
import HomePage from '../pages/HomePage'
import RecordProductPage from '../pages/RecordProductPage'
import RemindersPage from '../pages/RemindersPage'
import { ROUTES } from '../shared/utils/Routes'

export const router = createBrowserRouter([

    {
        path: "/",
        Component: HomeLayout,

        children: [
            {index: true, Component: HomePage},
            {path: ROUTES.RECORD_PRODUCT, Component: RecordProductPage,
                path: ROUTES.REMINDERS, Component: RemindersPage}, 
        ]

    },
])