import Home from './components/home/Home';
import BackOffice from './components/backOffice/BackOffice';
import Product from './components/home/ProductInfo';

export const routes: Array<[string, React.FC]> = [
    ["/", Home],
    ["/backoffice", BackOffice],
    ["/product/:id", BackOffice]
 
]