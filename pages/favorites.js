import '../styles/style.scss';
import { Favorites } from "../components/favorites";
import Link from 'next/link';
import { Provider } from 'mobx-react';
import ImdbStore from '../stores/imdbStore';
export default () => {
    return (
        <Provider ImdbStore = {ImdbStore}>
            <div className="container">
                <Link href="/" >
                    <a>Main Page</a>
                </Link>
                <Favorites />
            </div>
        </Provider>
    );
}