import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer"
import { thunk } from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

export const configstore = () => {
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['category']
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)

    return { store, persistor };
}