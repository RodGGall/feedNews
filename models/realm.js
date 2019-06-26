import Realm from 'realm';
import article from './article'
import source from './source'
import country from './country'

function realmHandler (callback) {
    Realm.open({schema: [article,source,country]})
    .then(callback)
}

function add(type, data) {
    realmHandler((realm) => {
        realm.write(() => {
            data.forEach(article => {
                realm.create(type, article);
            });
            
        })  
    })
}

function addCountry(type, data) {
    realmHandler((realm) => {
        realm.write(() => {
                realm.create(type, data)
            
        })  
    })
}

function get(type, callback) {
    realmHandler((realm) => {
        return callback(realm.objects(type))
    })
}

function addListener(type, callback) {
    realmHandler((realm) => {
        realm.objects(type).addListener(callback);
    })
}
function removeListeners(type){
    realmHandler((realm) =>{
        realm.removeAllListeners();
    })
}
export default {
    realmHandler,
    add,
    addCountry,
    get,
    addListener,
    removeListeners,
} 