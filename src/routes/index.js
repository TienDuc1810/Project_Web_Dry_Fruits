import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import SiteMapPage from '@/pages/SiteMapPage';
import LoginPage from '@/pages/account/LoginPage';

const routes = [
    {path: '/',component: HomePage },
    {path: '/contact',component: ContactPage },
    {path: '/sitemap',component: SiteMapPage },
    {path: '/account/login',component: LoginPage },
]

export default routes;