import Home from './components/home/Home';
import BackOffice from './components/backOffice/BackOffice';

export const routes: Array<[string, React.FC]> = [
    ["/", Home],
    ["/backoffice", BackOffice],
 
]