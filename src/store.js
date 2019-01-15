import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        session: null,
        photos: [],
    },
    mutations: {
        addPhoto(state, photo){
            state.photos.push(photo);
        },
        addPhotos(state, photos){
            photos.forEach((photo)=>{
                state.commit('addPhoto', photo);
            });
        },
    },
    actions: {
        fetchPhotos(context){
            return new Promise((resolve)=>{
                resolve([
                    {
                        id: 1,
                        url: 'bob.com',
                    },
                    {
                        id: 2,
                        url: 'joe.com',
                    },
                    {
                        id: 3,
                        url: 'sally.com',
                    },
                    {
                        id: 4,
                        url: 'yes.com',
                    },
                ]);
            });
        },
        savePhotos({ commit, dispatch, }){
            dispatch('fetchPhotos').then((photos)=>{
                commit('addPhotos', photos);
            });
        },
    },
});
