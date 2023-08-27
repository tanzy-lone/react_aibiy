import { configureStore, combineReducers } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import moreReducer from './modules/more'
import favorReducer from './modules/favor'
import detailReducer from './modules/detail'
import mainReducer from './modules/main'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session';

// 定义持久化配置
const persistConfig = {
  key: 'root',
  storage
  // 设置黑名单 也就是让某个模块不进行持久缓存
  // blacklist: 'favor'
}

const reducers = combineReducers({
  home: homeReducer,
  more: moreReducer,
  favor: favorReducer,
  detail: detailReducer,
  main: mainReducer
})

// 创建持久化reducer
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // 解决存储数据时存在无法序列化的问题
      //关闭redux序列化检测
      serializableCheck: false
    })
})

// 创建持久化存储器
const persistor = persistStore(store)
export default store
export { persistor }
