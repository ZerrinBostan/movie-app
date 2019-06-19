import {decorate ,observable , action} from 'mobx';

class ImdbStore {
    @observable jsonArray= [];
    @observable imdbType = "";
    @observable favorites = [];
    @action changeFavorites(favorites) {
        console.log(favorites);
        this.favorites = favorites;
    }
    @action changeType(imdbType) {
        this.imdbType = imdbType;
    }
    @action changeData(jsonArray) {
        this.jsonArray = jsonArray;
    }
}
const imdbStore = new ImdbStore();
export default imdbStore;