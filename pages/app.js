import Search from '../components/search/search';
import ImdbItems from '../components/imdbItems';
import Link from 'next/link';
export class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Link href="/favorites">
                    <a>Favorites</a>
                </Link>
                <Search />
                <div className="row">
                    <div className="col-md-12">
                            <ImdbItems />
                        </div>
                    </div>
                </div>
        );
    }
}

export default App
