import AdminPage from "../pages/AdminPage/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OderPage from "../pages/OderPage/OderPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OderPage,
        isShowHeader: true
    },
    {
        path: '/product',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true
    }, {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true
    }, {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]