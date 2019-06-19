import '../styles/style.scss'
import App from './app';
import {Provider} from 'mobx-react';
import ImdbStore from '../stores/imdbStore';

export default () => {
   return(
     <Provider ImdbStore = {ImdbStore}>
        <App /> 
     </Provider>
    );
}
